const mongoose = require("mongoose");


const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250, 'Tweets cannot be more than 250 characters.']
    },
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        }

    ]

}, {timestamps : true})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
