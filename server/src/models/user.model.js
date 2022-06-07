const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: Number},
    first_name: {type: String, required: true},
    last_name: {type: String},
    email : {type: String},
    gender: {type: String},
    Images: {type: String, required: true}
},
{
    versionKey: false,
    timestamps: true
}
);

const User = mongoose.model("user",userSchema);

module.exports = User;