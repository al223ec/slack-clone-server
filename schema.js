import { gql } from 'apollo-server-express';

export default gql`
  type Team {
    id: Int!
    owner: User!
    members: [User!]
    channels: [Channel!]!
  }

  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }

  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
  }

  type Query {
    me: User
  }
`;
