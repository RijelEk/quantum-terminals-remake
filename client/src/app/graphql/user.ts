import {  gql } from '@apollo/client';

export const ME_QUERY = "ME_QUERY";
export const meQuery = gql`
 query meQuery {
	me {
    id
  	email
   username
    createdAt
  }
}
`;



