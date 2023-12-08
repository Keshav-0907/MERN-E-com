const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Name"]
    },
    description: {
        type: String,
        required: [true, "Enter description"]
    },
    price: {
        type: Number,
        required: [true, "Enter Price"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Enter Category"]
    },
    Stock: {
        type: Number,
        required: [true, "Enter Stock"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel