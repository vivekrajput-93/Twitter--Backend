const TweetRepsoitory = require("../../src/repository/tweet-repo");
const Tweet = require("../../src/models/tweet");

jest.mock('../../src/models/tweet.js');

test("Should create a new tweet and return it", async () => {
    const data = {
        content : "Testing tweet"
    }

    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
        return { ...data, createdAt : "2024-01-12", updatedAt : "2024-01-12"}
    });

    const tweetRepsoitory = new TweetRepsoitory();
    const tweet = await tweetRepsoitory.create(data);
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
});

describe("Get all tweet testing", () => {
    test('Testing limit for get All', async() => {
        const data = {
            content : "Testing tweet"
        }

        const tweetArray = [ { ...data, createdAt : "2024-01-12", updatedAt : "2024-01-12"},  { ...data, createdAt : "2024-01-12", updatedAt : "2024-01-12"},  { ...data, createdAt : "2024-01-12", updatedAt : "2024-01-12"}]
        const findResponse = {tweetArray};
        findResponse.skip = jest.fn((offset) => findResponse);
        findResponse.limit = jest.fn((limit) => findResponse.tweetArray.slice(0, limit));
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return findResponse;
        });

        const tweetRepsoitory = new TweetRepsoitory();
        const tweets = await tweetRepsoitory.getAll(0, 2);
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    })
})