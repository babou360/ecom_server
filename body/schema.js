const { gql } = require("apollo-server");

const typeDefs = gql`
type Product{
  id: ID!
  title: String!
  price: String!
  imageUrl: String!
  description: String!
}
type imageUrls{
    imageUrl: String!
}
type Query {
  products: [Product]!

}

type Mutation {
  createProduct(imageUrl: String!,description: String!,price: String!,title: String!): Product!
}
`;

module.exports = typeDefs;