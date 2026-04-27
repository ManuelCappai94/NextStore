"use client"
import { CardSectionProps } from "@/app/types/products"
import {useRef} from 'react'
import Link from 'next/link'
import { shopCategories } from "@/app/src/data/categories"
import style from "./rowProductSection.module.css"
import ProductsCard from "../productsCard/ProductsCard"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const RowProductSection = ({products, description, categoryLabel}: CardSectionProps) => {
    const slideRef = useRef<HTMLDivElement | null>(null)

    const getCategoryLabel = (slug:string) => {
        for(const category of shopCategories){
          const foundLabel = category.items.find(item => item.slug === slug)
          const foundSlug = category.slug
          if(foundLabel && foundSlug) {
            return{
              macroCategory: foundSlug,
              slug: foundLabel.label
            }
          }
         
        }
      }
    const isCategoryLabel = categoryLabel
    const label = isCategoryLabel ? getCategoryLabel(isCategoryLabel) : ""

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
  return (
    <>
    <div className={style.categoryName}>
      <h2>
        {description}
        {label ?`: ${label.slug}` : ""} 
      </h2>
        <Link 
          href={label ? `/categories/${label.macroCategory}/${categoryLabel}` : "./"}
          className={style.linkCont}
          ><button className={style.btns} type='button'>Vedi tutto</button></Link>
    </div>
    <div className={style.cardWrapper}>
      <div ref={slideRef} className={style.topSellers}>
        {
          products.map((product)=>(
            <ProductsCard key={product.id} product={product}/>
          )) 
        }
      </div>
      <div className={ products.length < 4 ? style.noBtnsContainer :
        style.btnscontainer}>
          <button type='button' onClick={scrollLeft}><FaArrowAltCircleLeft/></button>
          <button type='button' onClick={scrollRight}><FaArrowAltCircleRight/></button>
      </div>
    </div>
    </>
  )
}

export default RowProductSection
