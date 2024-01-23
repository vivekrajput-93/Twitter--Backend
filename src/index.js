const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")

const app = express();

const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repo")
const Comment = require("./models/comment")


app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')

    const tweets = await Tweet.find({
        content : ["This is my first tweet", "This is my second tweet", "fsgb123"]
    })
    // console.log(tweets);
});


