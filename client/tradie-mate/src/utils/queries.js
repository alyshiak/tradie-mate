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
  query Query($tradieId: ID!) {
  tradie(tradieId: $tradieId) {
    _id
    name
    trade
    location
    phone
    email
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
