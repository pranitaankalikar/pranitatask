

const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();


router.post('/addproduct/:categoryname', productController.postaddproduct);



module.exports = router;
