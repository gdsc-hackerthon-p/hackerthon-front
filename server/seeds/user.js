const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  nickname: String,
  githubId: String,
  commit: String
})

const UserModel = mongoose.model('UserTest', UserSchema);

module.exports = UserModel;