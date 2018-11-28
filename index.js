import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models,
  }),
});

server.applyMiddleware({ app, path: '/graphql' });

// { force: true } drop database prior to rebuild
models.sequelize.sync().then(() => {
  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});
