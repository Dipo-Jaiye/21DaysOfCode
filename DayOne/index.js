require("dotenv").config();

const express = require("express");

let { PORT, } = process.env;

PORT = PORT || 3000;

// initialize app
const app = express();

const homeMiddleware = (req, res) => {
    return res.end("app is running");
};

const apiMiddleware = (req, res) => {
    return res.json({"api":"running"});
}

// api route
app.get("/api", apiMiddleware);

// home route
app.get("/", homeMiddleware);

// start server
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});