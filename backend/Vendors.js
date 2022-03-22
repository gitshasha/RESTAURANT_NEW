const mongoose = require("mongoose");
const vendorschema = new mongoose.Schema({
  name: String,
  age: Number,
  Foods: Array,
});

module.exports = mongoose.model("Vendor", vendorschema);
