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
        const user = await User.find({_id: {$eq: req.params.id}}).lean().exec(); 
        if (!user) {
            return res.status(404).send({ data: user, message: "error", error: "User Not found.." });
          }
          return res.status(200).send({ data: user, message: "success" });
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/edit", async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new :true}).lean().exec(); 
        return res.status(200).send(user)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.get("/:id/addressess", async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const address = user.address; 
        res.status(200).send(address)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.post("/:id/addressess/create", async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $push: { address: { ...req.body } } },
            { new: true }
          );
        return res.status(200).send(user)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id/addressess/idx/edit", async (req,res) => {
    try {
        const Udata = await User.updateOne({ _id: req.params.id, "Address._id": req.params.idx },{ $set: { "Address.$": req.body } });
        if (Udata.acknowledged === true) {
            const user = await User.findById(req.params.id).lean().exec();
            return res.status(201).send(user.address);
          }
          return res.status(404).send({message: error.message });
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;