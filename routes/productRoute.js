const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')
const { getProducts, getProductsById, postProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.get('/:id', getProductsById)

router.get('/', getProducts)

router.post('/', postProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router