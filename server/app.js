// const mongo = require("mongodb");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const express = require("express");
const path = require("path");
const app = express();

const keys = require("./config/keys")

// Call routers
const indexRouter = require("./routes/index")
const loginRouter = require("./routes/account/login")
const registerRouter = require("./routes/account/register")

const port = 8000;

// const session = require("express-session");

// Mongodb mongoose connection
mongoose.connect("mongodb+srv://" + keys.mongodb.user + ":" + keys.mongodb.password + "@cluster0.lawom.mongodb.net/test?retryWrites=true&w=majority")
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log("Successfully connection to MongoDB");
})

app.use('/', indexRouter)
app.use('/', loginRouter)
app.use('/', registerRouter)


app.listen(port, () => {
    console.log('Listening on port ${port}');
});
