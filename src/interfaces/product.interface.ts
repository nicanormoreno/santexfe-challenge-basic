export interface iProductList {
    items: iProduct[]
    totalItems: number
}

export interface iProduct {
    id: number;
    name: string
    description: string
    featuredAsset: iAsset;
    variants: iProductVariant[]
}

export interface iProductVariant {
    id: number;
    productId: number;
    sku: string
    name: string
    featuredAsset: iAsset;
    price: number
    priceWithTax: number
    stockLevel: number
}

export interface iAsset {
    preview: string
}
