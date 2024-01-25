const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")

const app = express();

const Tweet = require("./models/tweet");
const HashtagRepository = require("./repository/hashtag-repo")
const Comment = require("./models/comment")
const TweetService = require("./service/tweet-service");


app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')
});


