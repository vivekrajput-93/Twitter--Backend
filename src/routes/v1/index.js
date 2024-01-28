const express = require("express");
const {tweetCreate, getTweet} = require("../../controllers/tweet-controller");
const { toggleLike } = require("../../controllers/like-controller");
const { commentCreate } = require("../../controllers/comment-controller");

const router = express.Router();

router.post("/tweets", tweetCreate);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike)


router.post("/comment", commentCreate);

module.exports = router;