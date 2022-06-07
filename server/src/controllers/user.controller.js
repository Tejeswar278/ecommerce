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

router.patch("/:id/edit", async (req,res) => {
    try {
        const user2 = await User.findByIdAndUpdate(req.params.id, req.body, {new :true}).lean().exec(); 
        res.status(200).send(user2)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id/addressess", async (req,res) => {
    try {
        const user3 = await User.find({_id:{$eq:req.params.id}}).lean().exec(); 
        res.status(200).send(user3.Address)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.post("/:id/addressess/create", async (req,res) => {
    try {
        let user=await User.find({_id:{$eq:req.params.id}}).lean().exec()
           user.Address.push(req.body)
         let Updated=  await User.findByIdAndUpdate(req.params.id,user,{new:true}).lean().exec()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.post("/:id/addressess/idx/edit", async (req,res) => {
    try {
        let user=await User.find({_id:{$eq:req.params.id}}).lean().exec()
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;