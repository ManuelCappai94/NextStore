import React from 'react'
import productStyle from "./productsCard.module.css"
import { FaCartPlus } from "react-icons/fa";
import { Product } from '@/app/types/products';
import { discountCalc } from '@/app/lib/helpers/percentageCalc'
import { starsRating } from '@/app/lib/helpers/StarCreator';

type Card = {
  product: Product
}


const ProductsCard = ({product } : Card ) => {
  return (
    <article className={productStyle.container}>
      <div className={productStyle.imgContainer}>
        <img className={productStyle.thumbnail} src={product.thumbnail} alt={"smartWatch"}/>
      </div>
      <div className={productStyle.infoContainer}>
        <h3 className={productStyle.desc}>
         {product.description}
        </h3>
        <div className={productStyle.secondRow}>
        <span className={productStyle.priceCont}>
            <h2 className={productStyle.price}>
                {product.price}€
                </h2> 
            <h3 className={productStyle.discount}>
                {product.discountPercentage}%
                </h3>
            <h6 className={productStyle.fullPrice}>
              {discountCalc(product.price, product.discountPercentage)}
            </h6>
            </span>
            <button type='button' className={productStyle.cart}><FaCartPlus/></button>
        </div>
        <div className={productStyle.rdRow}>
          <span className={productStyle.rating}>
           <span className={productStyle.stars}>{starsRating(product.rating)}</span> <span>{product.rating}</span>
        </span>
        </div>
        
      </div>
    </article>
  )
}

export default ProductsCard
