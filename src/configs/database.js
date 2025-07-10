import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
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