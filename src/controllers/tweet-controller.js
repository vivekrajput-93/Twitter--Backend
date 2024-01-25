const TweetService = require("../service/tweet-service")

const tweetService = new TweetService();

const tweetCreate = async(req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            message : "Successfully created a tweet",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message :" Unable to create a tweet sorry !",
            data : {},
            err : error,
        })
    }
}

module.exports = {
    tweetCreate
}