const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

const User = require('./seeds/user');

mongoose.connect('mongodb://127.0.0.1:27017/HarktonTest')
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user', async (req,res) => {
  const user = await User.find({})
  res.json(user)
})

app.get('/userdetail', async(req,res) => {
  const {usernickname} = req.query;
  const user = await User.find({nickname: usernickname})
  res.json(user)
})

app.get('/userpage', async(req,res) => {
  const {usernickname} = req.query;
  const user = await User.find({username: usernickname})
  res.json(user)
})

app.post('/signup', async (req,res) => {
  const {username, password, nickname, githubId, commit} = req.body;
  const user = new User({ username, password, nickname, githubId, commit });
  await user.save();
  res.json('success');
})

app.post('/login', async (req,res) => {
  const {username} = req.body;
  const user = await User.find({username})
  console.log(user)
  res.json(user);
})

app.post('/commitup', async (req,res) => {
  const { name } = req.body;
  const user = await User.findOne({ username: name });
  user.commit += 1;
  await user.save();
  res.json('good')
})

app.listen(4000, () => {
  console.log('server 가동')
})