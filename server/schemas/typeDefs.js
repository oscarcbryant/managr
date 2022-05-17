const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Player {
    _id: ID
    firstname: String!
    surname: String!
    email: String!
    age: String!
    position: String!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    players: [Player]
    player(playerid: ID): Player
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    CreatePlayer(firstname: String!, surname: String!, email: String!, age: String!, position: String!): Player
    removePlayer(playerId: ID!): Player
  }
`;

module.exports = typeDefs;