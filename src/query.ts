import { gql } from "@apollo/client";

// export const CREATE_CUSTOMER = gql`
//   mutation CreateCustomer($createCustomerId: String!) {
//     createCustomer(id: $createCustomerId) {
//       id
//       email
//       contactName
//       contactEmail
//       number
//       userName
//     }
//   }
// `;

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
