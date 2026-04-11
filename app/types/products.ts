export type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
}

export type Dimensions = {
  width: number
  height: number
  depth: number
}


export type Product = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    category?: string
    brand?: string
    sku?: string
    weight?: number
    dimensions?: Dimensions
    reviews?: Review[]
    thumbnail: string
    images: string[]
}

export type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}
//nella ducumentazione le stringhe dentro images sono dentro degli array

export type CardSectionProps = {
  products: Product[]
  description: string
  categoryLabel?: string
}