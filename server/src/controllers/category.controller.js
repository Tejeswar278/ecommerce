const express = require("express");

const Category = require("../models/category.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const category = await Category.find().lean().exec();
        res.status(200).send(category)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(200).send(category)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const category = await Category.find({_id: {$eq: req.params.id}}).lean().exec(); 
        return res.status(200).send(category);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(category)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;