export type Review = {
    rating: number
    comment: string
    reviewerName: string
    date : string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  image: string
}

export type EnrichedReviews = Review & {
    user: {
        id: number | null
        name: string
        image: string | null       
    }
   
}

export type UsersResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

export type ReviewsApiResponse = {
  ProductId: number
  reviews: EnrichedReviews[]
}