"use client"

import ProductsCard from '../productsCard/ProductsCard'
import style from "./productGrid.module.css"
import type { CardSectionProps } from '@/app/types/products'


const ProductGrid = ({products}: CardSectionProps ) => {
    console.log(products)
  return (
        <div className={style.productGrid}>
         {
            products.map((product)=>{
                return(
                    <ProductsCard key={product.id} product={product} variant='listing' />
                )
            })
         }
        </div>
  )
}
export default ProductGrid
