const mongoose = require('mongoose');
//Schema = tipo de usuario 
const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);