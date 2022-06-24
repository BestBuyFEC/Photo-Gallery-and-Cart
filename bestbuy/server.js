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
        let data = await db.query(`SELECT * FROM image WHERE id = ${req.params.id};`)
        res.json(data.rows)
    } catch (error) {
        if(error){
            console.error(error);
            res.json(error);
        }
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});