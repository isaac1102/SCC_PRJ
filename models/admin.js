const mongoose = require('mongoose');

var AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registeredDate: {
    type: Date,
    default: Date.now()
  }
});

// var Admin = module.exports = mongoose.model('admin', adminSchema);

//Todo: To create admin accounts
