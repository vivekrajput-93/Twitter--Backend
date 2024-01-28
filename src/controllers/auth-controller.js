const UserService = require("../service/user-service");

const userService = new UserService();

const signup = async(req, res) => {
    try {
        const response = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name,
        })
        return res.status(201).json({
            success : true,
            message : "Successfully created a user",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : true,
            message : "Unable to create a user",
            data : {},
            err : error
        })
    }

}


const login = async(req, res) => {
    try {
        const token = await userService.signin(req.body)
        return res.status(200).json({
            success : true,
            message : "Successfully logined in",
            data : token,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Unable to login",
            data : {},
            err : error
        })
    }
}

module.exports = {
    signup,
    login
}