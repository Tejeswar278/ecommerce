const express = require("express");

const userController = require("./controllers/user.controller")
const brandController = require("./controllers/brand.controller")
const productController = require("./controllers/product.controller")
const orderController = require("./controllers/order.controller")

const app = express();
app.use(express.json())

app.use("/users",userController)
app.use("/brands",brandController)
app.use("/products",productController)
app.use("/orders",orderController)

module.exports = app;