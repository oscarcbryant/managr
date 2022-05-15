import { gql } from '@apollo/client';


export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`
export const ADD_PLAYER = gql`
mutation createPlayer($firstname: String, $surname: String, $email: String, $age: Number, $position: String) {
  createPlayer(firstname: $firstname, surname: $surname, email: $email, age: $age, position: $position) {
    _id
    firstname
    surname
    email
    age
    position
  }
}`
;
