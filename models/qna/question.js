const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    
    id: {
        type: Number,
        unique : true,
        required: true,
    },
    contents:{
        type: String,
        required: true
    },
    title:{
        type : String, 
        required: true
    },
    textBookId : {
        type : String
    },
    major : {
        type : String
    },
    like : {
        type : Number
    },
    viewCnt : {
        type : Number
    },
    regId:{
        type : String,
        required : true
    },
    regDate: {
        type: Date,
        default: Date.now()
    },
});

const Question = (module.exports = mongoose.model('Question', QuestionSchema));

module.exports = { Question };
