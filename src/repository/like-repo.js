const Like = require("../models/like");
const CrudRepository = require("./crud-repo");

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like)
    }

    async findByIdAndLikeable(data) {
        try {
            const response  = await Like.findOne(data);
            return response;
        } catch (error) {
            console.log("somethin went wrong at like repo");
            throw error
        }
    }
}

module.exports = LikeRepository;