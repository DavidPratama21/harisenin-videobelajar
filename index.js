import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
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
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());

// ===== USERS =====

app.post("/register", async (req, res) => {
    const { name, email, phone, gender, password, avatar } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send({ message: "Data tidak lengkap!" });
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
        avatar,
    });

    res.status(201).send({
        message: "Registrasi berhasil",
        user_id: userId,
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: "Isi Email & Password nya!" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
        return res.status(404).send("Email ga ketemu");
    }

    console.log(user);

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
    console.log(token);
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
    try {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } catch (e) {
        res.status(403).json({ message: "Tokennya nda valid" });
    }
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

app.put("/users/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, avatar, password } = req.body;
    try {
        const [emailTerdaftar] = await pool.query(
            `SELECT user_id FROM users WHERE email = ? AND user_id !=?`,
            [email, id]
        );
        if (emailTerdaftar.length > 0) {
            return res.status(400).send({ message: "Email sudah terdaftar" });
        }

        let hash = null;
        if (password) {
            hash = await bcrypt.hash(password, 10);
        }
        await updateUser({ name, email, phone, avatar, password: hash }, id);
        res.send({ success: true, message: "User berhasil diupdate" });
    } catch (e) {
        res.status(500).send({
            message: "Gagal mengupdate data user",
            error: e.message,
        });
    }
});

app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).send({ message: "Diisi dulu mas emailnya" });
    }

    try {
        await sendMail(to, subject, text);
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
        const products = await getProducts(req.query);
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
