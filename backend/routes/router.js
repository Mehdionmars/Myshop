const express = require('express')
const router = express.Router()
const prodCtr = require('../controllers/productController')
const userCtr = require('../controllers/userControllers')
const verifyToken = require('./verifyToken')
//------------Register------------
router.post('/register',userCtr.register)
router.post('/login',userCtr.login)
router.get('/test',verifyToken.verify,userCtr.test)
//------------products------------
router.get('/products',prodCtr.getAllProducts)
router.post('/addproduct',verifyToken.verify,prodCtr.addProduct)
router.delete('/delete/:idProd',verifyToken.verify,prodCtr.deleteProduct)

module.exports = router
