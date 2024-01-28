const express = require("express");
const { PORT } = require("./config/ServerConfig");
const connect = require("./config/database")
const {passportAuth} = require("./config/jwt-middleware")

const app = express();
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(passport.initialize());
passportAuth(passport);




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))

app.use("/api", apiRoutes);
app.listen(PORT, async() => {
    console.log(`Server Started on ${PORT}`)
    await connect();
    console.log('Mongodb is connected!')

    
});


