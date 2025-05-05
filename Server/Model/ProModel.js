const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    name:String, 
    brand:String,
    price:Number,
    images:String
})


module.exports = mongoose.model("product", ProSchema);