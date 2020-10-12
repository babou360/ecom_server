const {Product} = require("../db/db");

const resolvers = {  
    Query: {
        products: ()=>Product.findAll(),
    },

    Mutation: {
      async createProduct(parent, args, context, info) {
        const product = new Product({
          imageUrl: args.imageUrl,
          description: args.description,
          price: args.price,
          title: args.title,
        });
        await product.save()
        return product
    },
//     async updateUser(parent, args, context, info) {
//       const user = await User.findOne({ 
//         where: {
//           id: args.id
//         }
//       });
//       await user.update(
//         // Values to update
//         {
//             email:  args.email,
//             username: args.username,
//             password: args.password
//         }
//     )
//     return user;
//   },
//     async deletePost(parent, args, context, info) {
//       const post = await Post.findOne({ 
//         where: {
//           id: args.id
//         }
//       });
//       // console.log(user.id); // "Jane"
//       await post.destroy();
//       return post
//     },
    },
  }

module.exports = resolvers;