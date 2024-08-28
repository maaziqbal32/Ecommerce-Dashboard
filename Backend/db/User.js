// for the sake of the modren schemas
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name:String,
   email:String,
   password:String
});

module.exports = mongoose.model('User', userSchema);