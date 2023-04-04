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
