"use client"
import {useState, useEffect, useCallback} from 'react'
import Image from 'next/image';
import productStyle from "./HighligthedProduct.module.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { banners } from '@/app/src/data/bannerData';
import type { Banner } from '@/app/types/banner';

const HighlightedProduct = () => {
  const [active, setActive] = useState(0)
  

  const nextBanner = useCallback(() => {
    setActive(prevValue => {
      if(prevValue >= banners.length - 1) return 0
      return prevValue + 1
    })
  }, [banners.length])

  const prevBanner = () => {
    setActive(prevValue =>{
      if(prevValue === 0) return banners.length - 1
      return prevValue - 1
    })
  }
  
useEffect(()=>{
    const timer = setTimeout(()=>{
      nextBanner()
    }, 4000)
    return() => clearTimeout(timer)
  }, [active, nextBanner])
  
  const currentBanner = banners[active]
  const currentTheme = currentBanner.textTheme
  return (
    <section className={productStyle.megaContainer}>
        {
          banners.map((banner, index) =>{
            let classes;
            let position = (index - active + banners.length) % banners.length

            if(position === 0){
              classes= `${productStyle.active}`
            } else if(position === 1){
              classes= `${productStyle.prevActive}`
            } else {
              classes= `${productStyle.nextActive}`
            }
            return <BannerInfo key={banner._id} {...banner} classes={classes}/>
          })
        }
      <div className={productStyle.btnsContainer}>
         <button 
            className={`${productStyle.btnPrev} ${
      currentTheme === "dark" ? productStyle.darkArrow : productStyle.lightArrow
    }`}
            onClick={prevBanner}
            >
           <FaArrowAltCircleLeft/>
         </button>
         <button 
          className={`${productStyle.btnNext} ${
      currentTheme === "dark" ? productStyle.darkArrow : productStyle.lightArrow
    }`}
          onClick={nextBanner}
          >
          <FaArrowAltCircleRight/>
        </button>
      </div>
      <div>
          <ul className={productStyle.sliderDots}>
              {
                banners.map((_, index)=>{
                  return(
                    <li
                    key={index}
                    className={index === active? `${productStyle.dotFilled}` : `${productStyle.dot}`}
                    >
                      <GoDotFill/>
                    </li>
                  )
                })
              }
          </ul>
      </div>
    </section>
  )
}

const BannerInfo = ({title, text, image, category, classes, textTheme } : Banner)=>{
  return(
    <article className={classes}>
      <Image 
        className={productStyle.img}
        src={image}
        alt={category}
        loading="eager"
      />
      <div className={`${productStyle.slide} ${textTheme === "dark" ? productStyle.darkText : productStyle.lightText}`}>
          <div className={productStyle.slideText}>
            <h1 className={productStyle.title}>{title}</h1>
            <h3 className={productStyle.dscr}>{text}</h3>
          </div>
          <button type='button' className={productStyle.slideBtn}>Scopri di più</button>
      </div>
    </article>
  )
}

export default HighlightedProduct
