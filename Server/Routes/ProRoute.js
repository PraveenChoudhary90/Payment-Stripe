const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProModel");






route.post("/insert", ProController.InsertData);











module.exports = route;