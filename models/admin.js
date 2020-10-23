const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    registeredDate: {
        type: Date,
        default: Date.now(),
    },
});

const Admin = (module.exports = mongoose.model('admin', adminSchema));

module.exports = { Admin };
