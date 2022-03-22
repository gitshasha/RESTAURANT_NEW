const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: String,
  
  Restaurant_name:String,
  FoodItems:[{profileImg: String,
  Price:Number,
Foodname:String}]

});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
module.exports =RestaurantModel;
