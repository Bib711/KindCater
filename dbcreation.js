const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
async function db_connect() {
  try {
    await mongoose.connect('mongodb+srv://admin:Majojames2241@cluster0.fp61a1v.mongodb.net/kindcater', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Define user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});



// Add a new user
async function addToCater(name_, email_, password_) {
  const User = mongoose.model('user_caters', userSchema);
  try {
    await User.create({ name: name_, email: email_, password: password_ });
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

// Connect to MongoDB
db_connect();

// Add a sample user

app.listen(port, () => {
  console.log('Server running on port', port);
});
async function addToVol(name_, email_, password_) {
  const User = mongoose.model('user_vol', userSchema);
  try {
    await User.create({ name: name_, email: email_, password: password_ });
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}
async function addToOrg(name_, email_, password_) {
  const User = mongoose.model('user_org', userSchema);
  try {
    await User.create({ name: name_, email: email_, password: password_ });
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}
addToOrg("mathew","wedqw","dwdqwdqw")