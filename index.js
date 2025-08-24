import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import multer from "multer";
import sharp from "sharp";
import fs from "fs";
import { fileTypeFromBuffer } from "file-type";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { sendMail } from "./src/configs/database.js";
import {
    pool,
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    createUser,
    findUserByEmail,
    deleteProduct,
    findUserById,
    updateUser,
} from "./src/configs/database.js";

const JWT_SECRET = process.env.JWT_SECRET || "rahasia";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ===== Upload =====
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});


const prosesinGambar = async (buffer, originalName) => {
    const infoFile = await fileTypeFromBuffer(buffer);
    const namaFileBaru = `${path.parse(originalName).name}_${Date.now()}.${
        infoFile.ext
    }`;
    const pathBaru = path.join(__dirname, "uploads", namaFileBaru);

    await sharp(buffer)
        .resize({
            width: 800,
            height: 800,
            fit: "cover",
            position: "centre",
            withoutEnlargement: true,
        })
        .toFormat(infoFile.ext)
        .toFile(pathBaru);
    return path.basename(pathBaru);
};

// Versi Put & Post jadi 1
// app.post("/users/:id/avatar", upload.single("image"), async (req, res) => {
//     try {
//         // Validasi File
//         if (!req.file)
//             return res.status(400).json({ error: "File nda ke upload" });

//         // Validasi tipe file
//         const infoFile = await fileTypeFromBuffer(req.file.buffer);
//         const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
//         console.log(allowedTypes);
//         if (!infoFile || !allowedTypes.includes(infoFile.mime)) {
//             fs.unwatchFile(req.file.path);
//             return res.status(400).json({ error: "Format gambar ga valid" });
//         }

//         // Cek avatar lama
//         const [rows] = await pool.query(
//             "SELECT avatar FROM users WHERE user_id = ?",
//             [req.params.id]
//         );
//         if (rows.length > 0 && rows[0].avatar) {
//             const avatarLama = path.join(__dirname, "uploads", rows[0].avatar);
//             if (fs.existsSync(avatarLama)) {
//                 fs.unlinkSync(avatarLama);
//             }
//         }

//         // Auto resize gambar
//         const hasilPath = path.join(
//             __dirname,
//             "uploads",
//             `${path.parse(req.file.originalname).name}_${Date.now()}.${
//                 infoFile.ext
//             }`
//         );
//         await sharp(req.file.buffer)
//             .resize({
//                 width: 800,
//                 height: 800,
//                 fit: "inside",
//                 withoutEnlargement: true,
//             })
//             .toFormat(infoFile.ext)
//             .toFile(hasilPath);

//         // Update Query
//         await pool.query("UPDATE users SET avatar = ? WHERE user_id = ?", [
//             path.basename(hasilPath),
//             req.params.id,
//         ]);

//         res.json({
//             success: true,
//             message: "Gambar profil berhasil di update",
//             path: `/uploads/${path.basename(hasilPath)}`,
//         });
//     } catch (e) {
//         console.error("Error: ", e);
//         if (req.file) fs.unlinkSync(req.file.path);
//         res.status(500).json({ error: "Ada yg ga beres nih" });
//     }
// });

app.post("/users/:id/avatar", upload.single("image"), async (req, res) => {
    try {
        // Validasi File
        if (!req.file)
            return res.status(400).json({ error: "File nda ke upload" });

        // Validasi tipe file
        const infoFile = await fileTypeFromBuffer(req.file.buffer);
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        console.log(allowedTypes);
        if (!infoFile || !allowedTypes.includes(infoFile.mime)) {
            fs.unwatchFile(req.file.path);
            return res.status(400).json({ error: "Format gambar ga valid" });
        }

        // Proses gambar
        const avatarBaru = await prosesinGambar(
            req.file.buffer,
            req.file.originalname
        );
        // Update Query
        await pool.query("UPDATE users SET avatar = ? WHERE user_id = ?", [
            avatarBaru,
            req.params.id,
        ]);
        res.json({
            success: true,
            message: "Gambar profil berhasil di update",
            path: `/uploads/${avatarBaru}`,
        });
    } catch (e) {
        console.error("Error: ", e);
        res.status(500).json({ error: "Ada yg ga beres nih" });
    }
});

app.put("/users/:id/avatar", upload.single("image"), async (req, res) => {
    try {
        // Validasi File
        if (!req.file)
            return res.status(400).json({ error: "File nda ke upload" });

        // Validasi tipe file
        const infoFile = await fileTypeFromBuffer(req.file.buffer);
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!infoFile || !allowedTypes.includes(infoFile.mime)) {
            fs.unwatchFile(req.file.path);
            return res.status(400).json({ error: "Format gambar ga valid" });
        }

        // Cek avatar lama
        const [rows] = await pool.query(
            "SELECT avatar FROM users WHERE user_id = ?",
            [req.params.id]
        );
        if (rows.length > 0 && rows[0].avatar) {
            const avatarLama = path.join(__dirname, "uploads", rows[0].avatar);
            if (fs.existsSync(avatarLama)) {
                fs.unlinkSync(avatarLama);
            }
        }

        // Proses avatar baru
        const avatarBaru = await prosesinGambar(
            req.file.buffer,
            req.file.originalname
        );

        // Update Query
        await pool.query("UPDATE users SET avatar = ? WHERE user_id = ?", [
            path.basename(avatarBaru),
            req.params.id,
        ]);
        res.json({
            success: true,
            message: "Gambar profil berhasil di update",
            path: `/uploads/${avatarBaru}`,
        });
    } catch (e) {
        console.error("Error: ", e);
        res.status(500).json({ error: "Ada yg ga beres nih" });
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

// Utility Functions
const cekFieldWajib = (fields) => {
    return fields.every(
        (field) => field !== undefined && field !== null && field !== ""
    );
};

// ===== USERS =====

app.post("/register", async (req, res) => {
    const { name, email, phone, gender, password } = req.body;
    if (!cekFieldWajib([name, email, password])) {
        return res
            .status(400)
            .send({ message: "Isi dulu datanya yang lengkap" });
    }
    const [check] = await pool.query(`SELECT * FROM users WHERE email = ?`, [
        email,
    ]);
    if (check.length > 0) {
        return res.status(409).send("Email sudah terdaftar");
    }
    const hash = await bcrypt.hash(password, 10);
    const userId = await createUser({
        name,
        email,
        phone,
        gender,
        password: hash,
    });

    res.status(201).send({ message: "Registrasi berhasil", user_id: userId });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!cekFieldWajib([email, password])) {
        return res.status(400).send({ message: "Isi Email & Password nya!" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
        return res.status(404).send("Email ga ketemu");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
        { id: user.user_id, email: user.email },
        JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );
    res.json({
        message: "Login Success",
        token,
        user: {
            id: user.user_id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        },
    });
});

const autheticateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Tokennya nda ada" });
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.get("/me", autheticateToken, async (req, res) => {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json({
        id: user.user_id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
    });
});

app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).send("User tidak ditemukan");
        }
        res.send({
            success: true,
            data: user,
        });
    } catch (e) {
        res.status(500).send({
            message: "Gagal mengambil data user",
            error: e.message,
        });
    }
});

app.put("/user/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, avatar, password } = req.body;

    try {
        const [emailTerdaftar] = await pool.query(
            `SELECT user_id FROM users WHERE email = ? AND user_id !=?`,
            [email, id]
        );
        if (emailTerdaftar.length > 0) {
            return res.status(400).send({ message: "Emailnya dah terdaftar" });
        }

        const hash = password ? await bcrypt.hash(password, 10) : null;
        await updateUser({ name, email, phone, avatar, password: hash }, id);
        res.send({ success: true, message: "Sukses di update" });
    } catch (e) {
        res.status(500).send({
            message: "Gagal update data user",
            error: e.message,
        });
    }
});

app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    if (!cekFieldWajib([to, subject, text])) {
        return res.status(400).send({ message: "Diisi dulu mas emailnya" });
    }

    try {
        await sendMail(to, subject, text);
        res.status(200).json({ message: "Email berhasil dikirim" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post("/subscribe", async (req, res) => {
    const { to } = req.body;

    if (!to) return res.status(400).send({ message: "Diisi dulu mas emailnya" });
    
    try {
        await sendMail(
            to, 
            "Selamat!!! Kamu udah berlangganan 🎉",
            "Terima kasih sudah subscribe di hariesok.id. Nantikan info terbaru dan penawaran spesial dari kami 🚀");
        res.status(200).json({ message: "Email berhasil dikirim" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// ===== PRODUCTS =====

// app.get("/products", autheticateToken, async (req, res) => {
//     const products = await getProducts();
//     res.send(products);
// });

app.get("/products", autheticateToken, async (req, res) => {
    try {
        const products = await getProducts(req.query || {});
        res.json(products);
    } catch (e) {
        res.status(500).json({ error: "Gagal ambil data" + e.message });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProduct(id);
        if (!product)
            return res.status(404).send({ message: "Produknya ga ada" });
        res.send(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.post("/products", async (req, res) => {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
        return res.status(400).send({ message: "Data tidak lengkap!" });
    }
    const product = await createProduct(name, description, price);
    res.status(201).send({
        success: true,
        data: product,
    });
});

app.put("/products/:id", async (req, res) => {
    const { name, description, price } = req.body;
    const { id } = req.params;
    if (!name || !description || !price) {
        return res.status(400).send({ message: "Data tidak lengkap!" });
    }

    try {
        const product = await updateProduct(id, name, description, price);
        if (!product) {
            return res.status(404).send({ message: "Produknya ga ada" });
        }
        res.send({
            success: true,
            data: product,
        });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await deleteProduct(id);
        res.send({ message: "Produk berhasil dihapus" });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Ada yg ga beres!", error: err.message });
});

app.listen(8080, () => {
    console.log("Lagi di port 8080");
});
