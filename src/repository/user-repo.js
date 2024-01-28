const User = require("../models/User");
const CrudRepository = require("./crud-repo");

class UserRepository extends CrudRepository {
    constructor() {
        super(User)
    }

    async findBy(data) {
        try {
            const user = await User.findOne(data);
            return user;
        } catch (error) {
            console.log("somethin went wrong at repo layer");
            throw error;
        }
    }

}

module.exports = UserRepository;