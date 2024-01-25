const {TweetRepository, HashtagRepository} = require("../repository/index")

class TweetService {

    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new  HashtagRepository();
        
    }


    async create(data) {
        try {
            const content = data.content;
            const tags  = content.match(/#[a-zA-Z0-9_]+/g)
            .map((tag) => tag.substring(1).toLowerCase())
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresenttags =  alreadyPresentTags.map(tags => tags.title)
            let newTags =  tags.filter(tag => !titleOfPresenttags.includes(tag));
            newTags = newTags.map(tag => {
                return {
                    title : tag,
                    tweets  : [tweet.id]
                }
            }) 
            await this.hashtagRepository.bulkcreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            })
            return tweet;
        } catch (error) {
            console.log(error);
            console.log("This is error in service layer");
        }
    }
}

module.exports = TweetService;
