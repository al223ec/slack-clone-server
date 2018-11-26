import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const port = 8000;
const app = express();

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => ({
      username: 'Robin Wieruch',
    }),
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
