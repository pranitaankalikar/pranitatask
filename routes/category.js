

const express = require('express');

const catergoryController = require('../controllers/category');

const router = express.Router();



router.get('/catgory-with-three-prod/:categoryname', catergoryController.getCategoryWithThreeProd);
router.post('/addcategory', catergoryController.postaddcategory);




module.exports = router;
