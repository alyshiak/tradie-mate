import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_TRADIES = gql`
  query allTradies {
    tradies {
      _id
      trade
      name
      location
      email
      phone
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_TRADIE = gql`
  query singleTradie($tradieId: ID!) {
    tradie(tradieId: $tradieId) {
        id_
        trade
        name
        location
        email
        phone
        comments {
          _id
          commentText
          commentAuthor
          createdAt
        }
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
