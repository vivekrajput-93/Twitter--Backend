const {LikeRepository, TweetRepository} = require("../repository/index");


class LikeService {

    constructor() {
        this.tweetRepo = new TweetRepository();
        this.likeRepo = new LikeRepository();
    }

    async toggleLike(modelId, modelType, userId){
        
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepo.find(modelId);
        } else if(modelType == 'Comment') {
            // TODO
        } else {
            throw new Error('unknown modelType !!');
        }

        const likeExists = await this.likeRepo.findByIdAndLikeable({
            likeable : modelId,
            onModel : modelType,
            user : userId
        });
        console.log(likeExists);

        if(likeExists) {
            likeable.likes.pull(likeExists.id);
            await likeable.save();
            await likeExists.deleteOne();
            var isAdded = false;
        }else {
            const newLike = await this.likeRepo.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });

            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

module.exports = LikeService;