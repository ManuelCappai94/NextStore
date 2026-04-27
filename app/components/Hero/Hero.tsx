"use client"
import HighlightedProduct from './HighlightedProduct'
import heroStyle from "./Hero.module.css"
import { Product} from '@/app/types/products'
import RowProductSection from '../RowProductSection/RowProductSection'


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
        <RowProductSection 
          products={products} 
          description={bannerText.discount}
          />
        <RowProductSection
          products={productsNd} 
          description={bannerText.topProducts}
          categoryLabel={productsNd[0]?.category}
          />
        <RowProductSection
          products={productsRd} 
          description={bannerText.topProducts}
          categoryLabel={productsRd[0]?.category}
          />
      </div>
    </section>
  )
}


export default Hero
