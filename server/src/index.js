const express = require("express");

const userController = require("./controllers/user.controller")
const brandController = require("./controllers/brand.controller")

const app = express();
app.use(express.json())

app.use("/users",userController)
app.use("/brands",brandController)

module.exports = app;