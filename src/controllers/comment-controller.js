const CommentService = require("../service/comment-service")

const commentService = new CommentService();

const commentCreate = async(req, res) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.user.id, req.body.content);
        return res.status(201).json({
            success : true,
            message : "Successfully created a comment",
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
    commentCreate
}