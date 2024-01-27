const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")

const app = express();
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

const {UserRepository,TweetRepository} = require("./repository/index");
const LikeService = require("./service/like-service");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))

app.use("/api", apiRoutes);
app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')

    
});


