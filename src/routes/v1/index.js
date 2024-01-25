const express = require("express");
const {tweetCreate} = require("../../controllers/tweet-controller")

const router = express.Router();

router.post("/tweets", tweetCreate);

module.exports = router;