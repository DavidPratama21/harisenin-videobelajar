import mysql from "mysql2";
import dotenv from "dotenv";
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
        allowPublicKeyRetrieval: true
    })
    .promise();

// ===== PRODUCTS =====

export async function getProducts() {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
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
    const [rows] = await pool.query(`SELECT * FROM users WHERE user_id = ?`, [id]);
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
