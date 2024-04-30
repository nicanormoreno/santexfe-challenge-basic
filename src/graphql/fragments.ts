import { gql } from "@apollo/client";
export const PRODUCT_LIST_OPTIONS = gql`
  fragment ProductListOptions on ProductListOptions {
    skip
    take
  }
`;

export const PRODUCT_INFO = gql`
  fragment ProductInfo on Product {
    id
    name
    description
    variants {
      id
      productId
      price
      sku
      name
      priceWithTax
      stockLevel
      featuredAsset {
        preview
      }
    }
    featuredAsset {
      preview
    }
   
  }
`

