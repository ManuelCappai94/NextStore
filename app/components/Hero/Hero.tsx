"use client"
import {useRef} from 'react'
import HighlightedProduct from './HighlightedProduct'
import ProductsCard from '../productsCard/ProductsCard'
import heroStyle from "./Hero.module.css"
import { Product, CardSectionProps } from '@/app/types/products'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


type HeroProps = {
  products: Product[]
  productsNd: Product[]
  productsRd: Product[]
}

const bannerText ={
  discount: "Scopri le nostre offerte",
  topProducts: "Top Prodotti"
}

const Hero = ({products, productsNd, productsRd}: HeroProps) => {
  // console.log(Array.isArray(products))

  return (
    <section>
      <div className={heroStyle.banner}>
        <HighlightedProduct/>
      </div>
      <div className={heroStyle.container}>
        <CardSection 
          products={products} 
          description={bannerText.discount}/>
        <CardSection 
          products={productsNd} 
          description={bannerText.topProducts}
          categoryLabel={productsNd[0]?.category}/>
        <CardSection 
          products={productsRd} 
          description={bannerText.topProducts}
          categoryLabel={productsRd[0]?.category}/>
      </div>
    </section>
  )
}

const CardSection = ({products, description, categoryLabel}: CardSectionProps) => {
  const slideRef = useRef<HTMLDivElement | null>(null)


    const scrollLeft = () => {
      slideRef.current?.scrollBy({
        left: -600,
        behavior: "smooth",
      })
    }
    const scrollRight = () => {
      slideRef.current?.scrollBy({
        left: 600,
        behavior: "smooth",
      })
    }
  return(
    <>
    <div className={heroStyle.categoryName}>
      <h2>
        {description}
        {categoryLabel ?`: ${categoryLabel}` : ""} 
      </h2>
        <button className={heroStyle.btns} type='button'>Vedi tutto</button>
    </div>
    <div className={heroStyle.cardWrapper}>
      <div ref={slideRef} className={heroStyle.topSellers}>
        {
          products.map((product)=>(
            <ProductsCard key={product.id} product={product}/>
          )) 
        }
      </div>
      <div className={heroStyle.btnscontainer}>
          <button type='button' onClick={scrollLeft}><FaArrowAltCircleLeft/></button>
          <button type='button' onClick={scrollRight}><FaArrowAltCircleRight/></button>
      </div>
    </div>
    </>
  )
}

export default Hero
