// Here we put mutations. Remove next line
import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
        ... on Order {
            id
            totalQuantity
            subTotal
            subTotalWithTax
            total
            totalWithTax
        }
    }
  }
`;

export const REGISTER_CUSTOMER_ACCOUNT = gql`
  mutation RegisterCustomerAccount($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
        ... on  Success {
            success
        }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
        ... on CurrentUser{
            id
            identifier
            channels {
                token
            }
        }
    }
  }
`;