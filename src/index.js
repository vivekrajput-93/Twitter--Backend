const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")

const app = express();
const apiRoutes = require("./routes/index");
const Tweet = require("./models/tweet");
const HashtagRepository = require("./repository/hashtag-repo")
const Comment = require("./models/comment")
const TweetService = require("./service/tweet-service");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))

app.use("/api", apiRoutes);
app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')

});


