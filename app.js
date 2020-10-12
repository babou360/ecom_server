
const {ApolloServer} =require('apollo-server');
const typeDefs =require('./body/schema');
const resolvers =require('./body/resolver');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });