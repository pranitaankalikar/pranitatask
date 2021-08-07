const Category = require('../models/category');
const Product = require('../models/product');
exports.getCategoryWithThreeProd = (req, res, next) => {
    const cat=req.params.categoryname;     ///http://localhost:2000/category/catgory-with-three-prod/category_name
    console.log(cat);
    Category.findAll({ where: { categoryname: cat } }).then(categories=>{
        const categoryId=categories[0].id;
        const category=categories[0];
       
        console.log(categoryId);

        Product.findAll({
            limit: 3,
            where: {
              categoryId:categoryId
            },
            order: [ [ 'createdAt', 'DESC' ]]
          }).then((entries)=>{
            return res.status(201).json({category,entries, success:true});
          });

          

       
      }).catch((err)=>{throw new Error(err)});

   
};
exports.postaddcategory = (req, res, next) => {
    console.log(req.body);     ////////http://localhost:2000/category/addcategory
    const {categoryname,status}=req.body;
    console.log(categoryname,status);
    Category.create({categoryname,status}).then(()=>{
        res.status(201).json({message:'category added successfully'});
    }).catch(err=>res.status(403).json({success:false,error:err}))
    
};


