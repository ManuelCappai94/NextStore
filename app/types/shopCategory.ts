export type ShopCategoryItem = {
  slug: string
  label: string
}

export type ShopCategories = {
    label: string
    slug: string
    items: ShopCategoryItem[]
}