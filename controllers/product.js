const Category = require('../models/category');
const Product = require('../models/product');
exports.postaddproduct = (req, res, next) => {
    const cat=req.params.categoryname;   ////http://localhost:2000/product/addproduct/category_name
    const {productname,quantity,amount}=req.body;
    //console.log(productname,quantity,amount);

    Category.findAll({ where: { categoryname: cat } }).then(categories=>{
        const category=categories[0];
        req.category=category;
        req.category.createProduct({productname,quantity,amount}).then((expense)=> {
          return res.status(201).json({expense, success:true});
        }).catch((err)=>{
          return res.status(402).json({success:false,error:err});
        })
      }).catch((err)=>{throw new Error(err)});
    
  
};