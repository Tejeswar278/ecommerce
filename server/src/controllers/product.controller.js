const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const products = await Product.find().populate({ path: "category_id", select: {} }).lean().exec();
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const product = await Product.find({_id: {$eq: req.params.id}}).lean().exec(); 
        return res.status(200).send(product);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(brand)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;