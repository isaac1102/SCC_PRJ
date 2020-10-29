const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    
    id: {
        type: Integer,
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
        type : Integer
    },
    viewCnt : {
        type : Integer
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    },
});

const Question = (module.exports = mongoose.model('Question', adminSchema));

module.exports = { Question };
