const productModel = require('../models/productModel')
const ApiFeatures = require('../utils/features')

// Get All Products -- Admin
exports.getAllProducts = async (req, res) => {

    const resultPerPage = 5;
    // const AllProducts = await productModel.find()
    const features = new ApiFeatures(productModel.find(), req.query).search().filter().pagination(resultPerPage)
    const products = await features.query;

    res.status(200).json({
        success: true,
        products
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

//Get Single Product
exports.getSingleProduct = async (req, res, next) => {
    const product = await productModel.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "No product with this ID"
        })
    }

    return res.status(200).json({
        success: true,
        product
    })
}