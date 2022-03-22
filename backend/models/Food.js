const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({
  name: String,
  profileImg: String,
  Restaurant_name:String,
  price:Number

});

const FoodModel = mongoose.model("Food", FoodSchema);
module.exports =FoodModel;
