import {  gql } from '@apollo/client';

export const REGISTER_MUTATION = "REGISTER_MUTATION";
export const registerMutation = gql`
  mutation Register($email: String!, $password: String!, $confirm_password: String!, $username: String!) {
    register(email: $email, password: $password, confirm_password: $confirm_password, username: $username) {
      user{
        username
        email
        id
        createdAt
        updatedAt
    }
     error{
       field,
       message
     }
    }
  }
`;