const express               = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./config');
  
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./resolvers/resolver');


const server = new ApolloServer({
  typeDefs,
  resolvers 
  });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);