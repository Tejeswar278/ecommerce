const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
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

const Order = mongoose.model("order",orderSchema);

module.exports = Order;