// const mongo = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();

const keys = require("./config/keys")

mongoose.Promise = global.Promise;

// const session = require("express-session");

// Mongodb mongoose connection
mongoose.connect("mongodb+srv://" + keys.mongodb.user + ":" + keys.mongodb.password + "@cluster0.lawom.mongodb.net/test?retryWrites=true&w=majority")
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log("Successfully connection to MongoDB");
})



app.get('/', (req, res)=> {
    res.send('Landing HTML here');
});
/*
Landing html example
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'root.html'))
});
*/

app.listen(8080, () => {
    console.log('Express App on port 8000');
});
