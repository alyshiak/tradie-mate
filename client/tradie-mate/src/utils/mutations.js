import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

 export const ADD_TRADIE = gql`
mutation Mutation($name: String!, $trade: String!, $location: String!, $email: String!, $phone: String!) {
  addTradie(name: $name, trade: $trade, location: $location, email: $email, phone: $phone) {
    _id
    name
    trade
    location
    phone
    email
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($tradieId: ID!, $commentText: String!) {
    addComment(tradieId: $tradieId, commentText: $commentText) {
      _id
      name
      trade
      location
      phone
      email
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_TRADIE = gql `
mutation RemoveTradie($tradieId: ID!) {
  removeTradie(tradieId: $tradieId) {
    _id
    name
    trade
    location
    phone
    email
    tradieCreator
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`
