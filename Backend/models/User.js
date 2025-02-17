const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String,  required: true, enum: ['Artisan', 'Customer'] },
});

module.exports = mongoose.model('User', userSchema);
