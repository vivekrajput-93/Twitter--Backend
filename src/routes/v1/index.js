const express = require("express");
const {tweetCreate, getTweet} = require("../../controllers/tweet-controller");
const { toggleLike } = require("../../controllers/like-controller");
const { commentCreate } = require("../../controllers/comment-controller");
const { signup, login } = require("../../controllers/auth-controller");
const  authenticate  = require("../../middlewares/authenticate")

const router = express.Router();

router.post("/tweets", authenticate, tweetCreate);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike)


router.post("/comment", authenticate, commentCreate);

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;