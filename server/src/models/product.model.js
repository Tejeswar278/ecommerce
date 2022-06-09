const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {type: String, required: true},
        product_image: [{ type: String, required: true }],
        product_color: [{ type: String, required: true }],
        product_size: [{ type: String, required: true }],
        product_cost: { type: Number, required: true },
        category_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
            required: true,
          }],
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const Product = mongoose.model("product",productSchema);

module.exports = Product;