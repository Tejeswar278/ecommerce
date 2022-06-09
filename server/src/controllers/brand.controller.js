const express = require("express");

const Brand = require("../models/brands.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const brands = await Brand.find().populate({ path: "product_id", select: {} }).lean().exec();
        res.status(200).send(brands)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const brand = await Brand.create(req.body);
        return res.status(200).send(user)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const brand = await Brand.find({_id: {$eq: req.params.id}}).lean().exec(); 
        return res.status(200).send(brand);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(brand)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;