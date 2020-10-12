const Sequelize = require('sequelize');

  const db=new Sequelize('instagram', 'root', 'root', {    
  dialect: 'mysql',
  host: 'localhost',
});

const ProductModel = db.define('product', {
  imageUrl: { type: Sequelize.STRING },
  price: { type: Sequelize.FLOAT },
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING }
});
// db.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return ProductModel.create({
//       imageUrl: casual.imageUrl,
//       price: casual.price,
//       title: casual.title,
//       description: casual.description
//     })
//   });
// });
const Product=db.models.product;

 module.exports= {Product};