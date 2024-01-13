const mongoose = require('mongoose');
const UserList = require('./user.json');

mongoose.connect("mongodb://127.0.0.1:27017/HarktonTest")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

  const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    nickname: String,
    githubId: String,
    commit: String
  })

  const UserModel = mongoose.model('UserTest', UserSchema);

const UserDB = async () => {
  await UserModel.deleteMany({});
  for(let list of UserList) {
    const userInfo = new UserModel({
      username: list.username,
      password: list.password,
      nickname: list.nickname,
      githubId:list.githubId,
      commit: list.commit
    });
    await userInfo.save();
  }
}

UserDB().then(() => {
  mongoose.connection.close();
})
