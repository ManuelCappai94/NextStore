import React from 'react'
import productStyle from "./HighligthedProduct.module.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDotCircle } from "react-icons/fa";
import placeholder from "../../assets/images/computer_placehoder.png"

const HighlightedProduct = () => {
  return (
    <section className={productStyle.megaContainer}>
      <img className={productStyle.img} src={placeholder.src} alt='computer' />
      <div className={productStyle.btnsContainer}>
        <button className={productStyle.btnPrev}>
          <FaArrowAltCircleLeft/>
        </button>
      </div>
      
        <div className={productStyle.slide}>
          <div className={productStyle.slideText}>
            <h1 className={productStyle.title}>Acquista il tuo PC</h1>
            <h3 className={productStyle.dscr}>Scopri tra tante offerte esclusive prodotti all'avanguardia</h3>
          </div>
          
          <button className={productStyle.slideBtn}>Scopri di più</button>
          <div>
          <ul className={productStyle.sliderDots}>
            <li><FaDotCircle/></li>
            <li><FaDotCircle/></li>
            <li><FaDotCircle/></li>
          </ul>
          </div>
      
      </div>
      <div>
        
      </div>
      <div className={productStyle.btnsContainer}>
        <button className={productStyle.btnNext}>
          <FaArrowAltCircleRight/>
        </button>
      </div>
     
    </section>
    
  )
}

export default HighlightedProduct
