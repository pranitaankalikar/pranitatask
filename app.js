

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');



 const sequelize = require('./util/database');
 const Category=require('./models/category');
 const Product=require('./models/product');



 const catogeryRoutes = require('./routes/category');
 const productRoutes = require('./routes/product');


const app = express();

app.use(cors());






//app.use(bodyParser.urlencoded());  ////this is for handling forms
app.use(bodyParser.json());  //this is for handling jsons


// app.use(express.static(path.join(__dirname, 'public')));

app.use('/category', catogeryRoutes);
app.use('/product', productRoutes);
 Product.belongsTo(Category,{constraints:true,onDelete:'CASCADE'});
 Category.hasMany(Product);




 sequelize
     //.sync({force:true})
     .sync()
     .then(result => {
         // console.log(result);
         app.listen(2000);
     })
     .catch(err=>console.log(err));
