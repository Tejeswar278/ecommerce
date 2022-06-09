const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String},
        email : {type: String},
        gender: {type: String},
        Images: {type: String, required: true},
        address:[
            {
            line_1: { type: String, required: false },
            city: { type: String, required: false },
            state: { type: String, required: false },
            add_type: { type: String, required: false, default: "home" },
            },
        ],
        Usertype:{type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const User = mongoose.model("user",userSchema);

module.exports = User;