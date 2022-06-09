const express = require("express");

const Review = require("../models/review.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const reviews = await Review.find().populate({ path: "product_id", select: {} }).populate({ path: "user_id", select: {} }).lean().exec();
        res.status(200).send(reviews)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const review = await Review.create(req.body);
        return res.status(200).send(review)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const review = await Review.findOne({_id: {$eq: req.params.id}}).lean().exec(); 
        return res.status(200).send(review);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(review)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;