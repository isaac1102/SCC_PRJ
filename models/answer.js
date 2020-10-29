const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    
    id: {
        type: Integer,
        unique : true,
        required: true,
    },
    contents:{
        type: String,
        required: true
    }, 
    like : {
        type : Integer
    }, 
    questionId : {
        type : String
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    },
});

const Answer = (module.exports = mongoose.model('Answer', adminSchema));

module.exports = { Answer };
