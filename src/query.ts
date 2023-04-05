import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($createAuthUserDto: CustomerProfile!) {
    createCustomer(createAuthUserDto: $createAuthUserDto) {
      number
      email
      contactPhoneNumber
      userName
      contactName
      contactEmail
      id
    }
  }
`;
export const GET_CUSTOMER = gql`
  query GetCustomer($getCustomerId: String!) {
    getCustomer(id: $getCustomerId) {
      email
      contactPhoneNumber
      contactName
      contactEmail
      number
      userName
      createdAt
      updatedAt
      archived
      id
    }
  }
`;

export const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomer {
    getAllCustomer {
      id
      userName
      email
      contactName
      contactEmail
      contactPhoneNumber
      number
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($deleteCustomerId: String!) {
    deleteCustomer(id: $deleteCustomerId) {
      id
      userName
    }
  }
`;
