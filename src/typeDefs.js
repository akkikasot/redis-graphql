import { gql } from "apollo-server-express";

export const typeDefs = gql`

  type Object {
  key: String
  value: String
  }

  type Query {
    get(key: String!): Object
  }

  type Mutation {
    set(key: String!,value: String!): Object!
    delete(key: String!): Boolean!
  }
`;