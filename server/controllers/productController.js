const productModel = require('../models/productModel')

// Get All Products -- Admin

exports.getAllProducts = async (req, res) => {
    const AllProducts = await productModel.find()

    res.status(200).json({
        success: true,
        AllProducts
    })
}

//Create Product 

exports.createProduct = async (req, res, next) => {
    const product = await productModel.create(req.body)

    res.status(200).json({
        "message": "Product Created",
        success: true,
        product,
    })
}

// Update Product 

exports.updateProduct = async (req, res, next) => {
    let product = productModel.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }

    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    return res.status(200).json({
        success: true,
        message: "Product Updated"
    })
}


//Delete Product

exports.deleteProduct = async (req, res, next) => {
    const product = await productModel.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Dont Exist"
        })
    }

    await productModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({
        success: true,
        message: "Product Deleted"
    })
}