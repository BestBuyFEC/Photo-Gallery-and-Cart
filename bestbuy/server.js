require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./conn.js");
const cors = require("cors");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));

app.get('/api/product/image/:id', async (req, res) => {
    try {
        let data = await db.query(`SELECT * FROM image WHERE product_id = ${req.params.id};`)
        res.json(data.rows)
    } catch (error) {
        if(error){
            console.error(error);
            res.json(error);
        }
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        //SELECT users.name, posts.postid, posts.post, posts.userid FROM posts INNER JOIN users ON posts.userid =users.id
        let data = await db.query(`SELECT * FROM product WHERE id = ${req.params.id};`)
        res.json(data.rows)
    } catch (error) {
        if(error){
            res.json(error)
        }
    }
})

app.get('/api/cart/:id', async (req, res) => {
    try {
        await db.query(`INSERT INTO cart (product_name, price, quantity, image_url, product_id) VALUES ('LEGO - Super Mario Nintendo Entertainment System 71374', 229.99, 1, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434148_sd.jpg',1);`);
        let data = await db.query(`SELECT * FROM cart WHERE id = ${req.params.id};`)
        res.json(data.rows)
    } catch (error) {
        if(error){
            console.error(error)
            res.json(error)
        }
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});