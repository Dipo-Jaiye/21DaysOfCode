require("dotenv").config();

const express = require("express");

let { PORT, } = process.env;

const routes = require("./routes");

PORT = PORT || 3000;

// initialize app
const app = express();

// use routes
app.use(routes);

// start server
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});