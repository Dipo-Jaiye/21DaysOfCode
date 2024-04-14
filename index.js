require("dotenv").config();

const express = require("express");
let { PORT, } = process.env;

PORT = PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.json({ "app": "running" });
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});