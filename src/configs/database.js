import mysql from "mysql2";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

export const pool = mysql
    .createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    })
    .promise();

// ===== PRODUCTS =====

// export async function getProducts() {
//     const [rows] = await pool.query("SELECT * FROM products");
//     return rows;
// }

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendMail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email dikirim: " + info.response);
        return info;
    } catch (e) {
        console.error("Error nih kirim email: ", e);
        throw new Error("Gagal kirim email");
    }
};

export async function getProducts({ search, sort, minPrice, maxPrice, bidangStudi }) {
    let query = "SELECT * FROM products WHERE 1=1";
    let values = [];

    if (search) {
        query += " AND (name LIKE ? OR description LIKE ?)";
        values.push(`%${search}%`, `%${search}%`);
    }

    if (bidangStudi) {
        query += " AND bidang_studi = ?";
        values.push(bidangStudi);
    }

    if (minPrice) {
        query += " AND price >= ?";
        values.push(Number(minPrice));
    }

    if (maxPrice) {
        query += " AND price <= ?";
        values.push(Number(maxPrice));
    }

    // Sorting
    switch (sort) {
        case "name_asc":
            query += " ORDER BY name ASC";
            break;
        case "name_desc":
            query += " ORDER BY name DESC";
            break;
        case "price_asc":
            query += " ORDER BY price ASC";
            break;
        case "price_desc":
            query += " ORDER BY price DESC";
            break;
    }
    try {
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (e) {
        throw new Error("Query Failed: " + e.message);
    }
}

export async function getProduct(id) {
    const [rows] = await pool.query(`SELECT * FROM products WHERE id = ? `, [
        id,
    ]);
    return rows[0];
}

export async function createProduct(name, description, price) {
    const [result] = await pool.query(
        `
        INSERT INTO products (name, description, price)
        VALUES (?, ?, ?)`,
        [name, description, price]
    );
    const id = result.insertId;
    return getProduct(id);
}

export async function updateProduct(id, name, description, price) {
    await pool.query(
        `UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?`,
        [name, description, price, id]
    );
    return getProduct(id);
}

export async function deleteProduct(id) {
    await pool.query("DELETE FROM products WHERE id = ?", [id]);
}

// ===== USERS =====

export async function createUser({
    name,
    email,
    phone,
    gender,
    password,
    avatar,
}) {
    const [result] = await pool.query(
        `INSERT INTO users (name, email, phone, gender, password, avatar)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [name, email, phone, gender || "male", password, avatar || null]
    );
    return result.insertId;
}

export async function findUserByEmail(email) {
    const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [
        email,
    ]);
    return rows[0];
}

export async function findUserById(id) {
    const [rows] = await pool.query(`SELECT * FROM users WHERE user_id = ?`, [
        id,
    ]);
    return rows[0] || null;
}

export async function updateUser(data, id) {
    const fields = [];
    const values = [];

    // Daftar kolom yang bisa diupdate
    const allowedFields = ["name", "email", "phone", "avatar", "password"];

    for (const key of allowedFields) {
        if (data[key] !== undefined && data[key] !== null) {
            fields.push(`${key} = ?`);
            values.push(data[key]);
        }
    }

    if (fields.length === 0) return null;

    const query = `UPDATE users SET ${fields.join(", ")} WHERE user_id = ?`;
    values.push(id);

    const [result] = await pool.query(query, values);
    return result;
}

//  ===== TUTORS =====
