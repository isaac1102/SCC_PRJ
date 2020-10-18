const mongoose = require("mongoose");

var ClientSchema = mongoose.Schema({
    type: {
        type: String,
        default: "c"
    },
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
    // pic stores the 'filename' of the profile picture
    // 회사 로고
    companyLogo: {
        type: String,
        default: ""
    },
}, {minimize: false});

var Client = module.exports = mongoose.model('Client', ClientSchema);
