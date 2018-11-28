import { gql } from 'apollo-server-express';

export default gql`
  type Team {
    id: Int!
    owner: User!
    members: [User!]
    channels: [Channel!]!
    name: String!
  }

  type Query {
    getTeam(id: Int!): Team!
  }

  type Mutation {
    createTeam(name: String!): Boolean!
  }
`;
