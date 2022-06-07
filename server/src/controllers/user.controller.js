const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const users = await User.find().lean().exec();
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/create", async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const user1 = await User.find({_id: {$eq: req.params.id}}).lean().exec(); 
        res.status(200).send(user1)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;