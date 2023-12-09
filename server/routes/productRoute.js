const express = require('express')
const router = express.Router()
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController')


router.route('/products').get(getAllProducts)

router.route('/product/new').post(createProduct)

router.route('/product/update/:id').put(updateProduct)

router.route('/product/delete/:id').delete(deleteProduct)

router.route('/product/:id').get(getSingleProduct)

module.exports = router 