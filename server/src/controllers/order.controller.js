const express = require("express");

const Order = require("../models/order.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const orders = await Order.find().populate({ path: "product_id", select: {} }).populate({ path: "user_id", select: {} }).lean().exec();
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const order = await Order.create(req.body);
        return res.status(200).send(order)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const order = await Order.find({_id: {$eq: req.params.id}}).lean().exec(); 
        return res.status(200).send(order);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(order)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;