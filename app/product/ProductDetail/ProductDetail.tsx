"use client"
import { useState } from "react"
import style from "./productDetail.module.css"
import type { Product } from "@/app/types/products"

type DetailsProps = {
    product : Product
}

const ProductDetail = ({product} : DetailsProps) => {
    const [onSpotlight, setOnSpotlight] = useState(product.images[0] ?? "")
  
  return (
    <article className={style.container}>
        <div className={style.firstRow}>
            <div className={style.imgContainer}>
                <div className={style.imgInBackground}>
                {
                    product.images.map((image, index)=>{
                        return (
                            <img
                                src={image}
                                alt= {product.title}
                                key={index}
                                className={`${style.background} ${
                                onSpotlight === image ? style.active : ""
                                }`}
                                onClick={()=> setOnSpotlight(image)}
                            />
                        )
                    })
                }
                </div>
                <div className={style.imgOnSpotlight}>
                <img 
                    src={onSpotlight}
                    alt = {product.title}
                    className={style.spotlight}
                />
                </div>
            </div>
            <div className={style.infoContainer}>
                <h1>{product.title}</h1>
                <h2>{product.brand}</h2>
                <p>{product.description}</p>
                <p>{product.price}€</p>
            </div>
        </div>
      
    </article>
  )
}

export default ProductDetail
