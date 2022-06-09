const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        review: [{ type: String, required: true }],
        product_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true,
          }],
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const Review = mongoose.model("review",reviewSchema);

module.exports = Review;