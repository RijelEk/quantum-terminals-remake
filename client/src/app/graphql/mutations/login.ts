import {  gql } from '@apollo/client';

export const LOGIN_MUTATION = "LOGIN_MUTATION";
export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user{
        id
      email
      username
      createdAt
      games
      score
      }
      error{
        field,
        message
      }
    }
  }
`;