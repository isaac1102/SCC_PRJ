const mongoose = require('mongoose');

const MajorSchema = mongoose.Schema({
    
    id: {
        type: Integer,
        unique : true,
        required : true
    },
    lrgCtg : { 
        type : String,
        required : true
    },
    smlCtg : {
        type : String
    }
});

const Major = (module.exports = mongoose.model('Major', adminSchema));

module.exports = { Major };
