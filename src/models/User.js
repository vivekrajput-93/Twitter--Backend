const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/ServerConfig");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

userSchema.pre("save", function(next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});


userSchema.methods.comparePassword = function comapre(password) {
    return bcrypt.compareSync(password, this.password);
}


userSchema.methods.genJwt = function generate() {
    return JWT.sign({id: this._id, email : this.email}, JWT_SECRET, {expiresIn : "1h"});
}

const User = mongoose.model("User", userSchema);

module.exports = User;