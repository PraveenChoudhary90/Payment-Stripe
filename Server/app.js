const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Proroute = require("./Routes/ProRoute");


app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));


mongoose.connect("mongodb://127.0.0.1:27017/StripePayment").then(()=>{
    console.log("DataBase IS Connected");
})


app.use("/data", Proroute);


app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})