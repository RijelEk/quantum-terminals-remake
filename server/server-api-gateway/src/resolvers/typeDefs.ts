import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Error {
    message: String
    field: [String]
  }

  type User {
    email: String
    id: String
    avatarIs: String
    username: String
    createdAt: String
    updatedAt: String
    score: String
    games: [String]
  }

  type Response {
    user: User
    error: Error
  }

  type Query {
    files: [String]
    me: User
  }

  type Mutation {
    uploadFile(file: Upload!): Boolean
    login(email: String, password: String): Response
    register(
      username: String
      email: String
      password: String
      confirm_password: String
    ): Response
    confirmUser(token: String): Boolean
  }
`;
