import { gql } from "@apollo/client";
import {PRODUCT_INFO } from "./fragments";

export const GET_PRODUCT_LIST = gql`
${PRODUCT_INFO}
  query GetProductList($options: ProductListOptions) {
    products(options: $options) {
      items {
        ...ProductInfo
      }
      totalItems
    }
  }
`;