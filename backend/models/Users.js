const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  profileImg: String,
  age: Number,
  Foods: Array,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;


