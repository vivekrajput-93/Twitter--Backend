const express = require("express");
const {tweetCreate} = require("../../controllers/tweet-controller");
const { toggleLike } = require("../../controllers/like-controller");

const router = express.Router();

router.post("/tweets", tweetCreate);

router.post("/likes/toggle", toggleLike)

module.exports = router;