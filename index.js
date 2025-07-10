import express from "express";
import {
    getProducts,
    getProduct,
    createProduct,
} from "./src/configs/database.js";
const app = express();

app.use(express.json());

app.get("/products", async (req, res) => {
    const products = await getProducts();
    res.send(products);
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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Ada yg ga beres!", error: err.message });
});

app.listen(8080, () => {
    console.log("Lagi di port 8080");
});
