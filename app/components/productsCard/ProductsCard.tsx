"use client"

import Link from "next/link";
import { useState } from "react";
import productStyle from "./productsCard.module.css"
import { Product } from '@/app/types/products';
import { discountCalc } from '@/app/lib/helpers/percentageCalc'
import { starsRating } from '@/app/lib/helpers/StarCreator';
import { FaHeart, FaRegHeart } from "react-icons/fa"

type CardProps = {
  product: Product
  variant?: "home" | "listing"
}


const ProductsCard = ({product, variant = "home" } : CardProps ) => {
  const isListing = variant === "listing"
  const [isFavorite, setIsFavorite] = useState(false)
  
  const handleWhishListClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(prev => !prev)
    if(isFavorite) {
      console.log("rimosso dai preferiti")
    } else{
      console.log("aggiunto ai preferiti")
    }
  }
  //sarà true per queste 2 ma false per l'unica stringa mancante, non serve useState
  const isOnStock =
    product.availabilityStatus === "In Stock" ||
    product.availabilityStatus === "Low Stock"

  const avaiability = () =>{
    if(product.availabilityStatus === "In Stock"){
      return <p>Acqista ora</p>
    }else if(product.availabilityStatus === "Low Stock"){
      return <p>Solo <span className={productStyle.stock}>{product.stock}</span> rimanenti !</p>
    } else {
      return <p>Tornerà Presto !</p>
    }
  }

   const handleClickCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (isOnStock) {
      console.log("aggiunto al carrello")
      return
    }
    console.log("out of stock")
  }

  return (
    <Link href={`/product/${product.id}`}>
    <article 
      className= {`${productStyle.container} ${
        isListing ? productStyle.listing : productStyle.home
      }`}
      >
      <div className={productStyle.imgContainer}>
        {isListing && (
          <button
          type="button"
            className={productStyle.whishlist}
            onClick={handleWhishListClick}
            aria-label={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
            >
              {isFavorite ? <FaHeart/> : <FaRegHeart/>}
            </button>
        )}
        <img className={productStyle.thumbnail} src={product.thumbnail} alt={"smartWatch"}/>
      </div>
      <div className={productStyle.infoContainer}>
        <h2 className={productStyle.title}>{product.title}</h2>
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

        </div>
        <div className={productStyle.rdRow}>
          <span className={productStyle.rating}>
           <span className={productStyle.stars}>{starsRating(product.rating)}</span> <span>{product.rating}</span>
        </span>
        </div>
        <div className={productStyle.avaiablilty}>
          {avaiability()}
        </div>
            <button 
              type='button' 
              className={productStyle.cart}
              onClick={handleClickCart}
            >
            {
              isOnStock ? "Aggiungi al carrello" : "Aggiungi ai preferiti"
            }    
            </button>
      </div>
    </article>
    </Link>
  )
}

export default ProductsCard
