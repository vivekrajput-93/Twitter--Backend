const LikeService = require("../service/like-service");


const likeService = new LikeService();

const toggleLike = async(req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success : true,
            message : "Successfully toggle like",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "Somethin went wrong !",
            err : error
        })
    }
}

module.exports = {
    toggleLike
}