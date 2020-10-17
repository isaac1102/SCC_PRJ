const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const path = require("path");
const session = require("express-session");

const keys = require("./config/keys");

const app = express();


const http = require('http');
http.createServer((request, response) => {
    console.log('Server open');
}).listen(8000); // Todo: change port number as 80
