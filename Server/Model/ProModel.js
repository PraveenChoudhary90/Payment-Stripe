const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    name:String, 
    brand:String,
    price:Number,
    defaultImage:String,
    images:[String]
})


module.exports = mongoose.model("product", ProSchema);