const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_name: {type: String, required: true}
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const Category = mongoose.model("category",categorySchema);

module.exports = Category;