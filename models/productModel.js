const { Schema, model } = require("mongoose")

const productSchema = new Schema(
{
    productName: { type: String, required: [true, "Please enter product name"]},
    quantity: {type: Number, required: true, default: 0},
    price: { type: Number, required: true},
    image: {type: String, required: false}  
},
{
    timestamps: true
});

const Product = model('Product', productSchema);

module.exports = Product;

