const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    onModel : {
        type : String,
        required : true,
        enum : ["Tweet", "Comment"]
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : "onModel",
    }
}, {timestamps : true})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;