
import {  gql } from '@apollo/client';

export const USER_CONFIRM_QUERY = "USER_CONFIRM_QUERY";
export const confirmQuery = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
