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

module.exports = router;