const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")

const app = express();


app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')
});