const JWT  = require("passport-jwt");
const { JWT_SECRET } = require("./ServerConfig");
const User = require("../models/User");

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : JWT_SECRET
}

const passportAuth = async(passport) => {
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false)
        }
        else {
            done(null, user)
        }
    }));

}

module.exports = {
    passportAuth
}