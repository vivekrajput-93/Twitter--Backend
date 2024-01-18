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
    // const tweet = await Tweet.create({
    //     content : "This is my third tweet",

    // })
    const TweetRepo = new TweetRepository();
    const tweet =  await TweetRepo.getWithComments('65a940cf5d6d40c2b860be79');
    console.log(tweet);
});

