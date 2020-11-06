const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    
    id: {
        type: Number,
        unique : true,
        required: true,
    },
    contents:{
        type: String,
        required: true
    }, 
    like : {
        type : Number
    }, 
    questionId : {
        type : String
    },
    regId:{
        type : String,
        required : true
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    },
});

const Answer = (module.exports = mongoose.model('Answer', AnswerSchema));

module.exports = { Answer };
