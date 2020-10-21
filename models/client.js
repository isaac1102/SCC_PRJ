const mongoose = require("mongoose");

var ClientSchema = mongoose.Schema({
    // For any reply/subscription notification
    messageNotification: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    // For resetting password
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    dateOfBirth: {
        type: String
    },
    kakaoID: {
        type: String
    },
    facebookID: {
        type: String
    },
    googleID: {
        type: String
    },
    naverID: {
        type: String
    },
    appleID: {
        type: String
    },
    subscription: {
        type: Boolean,
        default: false
    }
}, {minimize: false});

var Client = module.exports = mongoose.model('Client', ClientSchema);
