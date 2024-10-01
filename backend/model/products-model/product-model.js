const {Schema, model} = require("mongoose");

const productShema = new Schema({
    product_image: {
        type: String,
        required: true,
    },
    product_brand: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    discount_amount: {
        type: Number,
        required: true,
    },
    total_amount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
});

const productModel = new model("product", productShema);
module.exports = productModel;