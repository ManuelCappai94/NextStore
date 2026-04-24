import Link from 'next/link'
import type { CardSectionProps } from '@/app/types/products'
import style from "./catologPage.module.css"
import Filters from '@/app/components/filters/Filters'
import ProductGrid from '../ProductGrid/ProductGrid'
import { shopCategories } from '@/app/src/data/categories'


const CatalogPage = ({products, categoryLabel}: CardSectionProps) => {
  const getCategoryLabel = (slug: string) => {
    for(const category of shopCategories){
      const found = category.items.find(item => item.slug === slug)
      if(found) return found.label
    }
    return slug
  }
  const labelParam = categoryLabel 
  const label = labelParam ? getCategoryLabel(labelParam) : ""

    if(!products?.length) {
        return (
      <article className={style.container}>
        <h1>{categoryLabel}</h1>
        <p>Nessun prodotto trovato.</p>
        <Link href="/">Indietro</Link>
      </article>
    )
  }
  return (
    <article className={style.container}>
        <div className={style.header}>
            <h1>{label}</h1>
        </div>
        <div>
            <Filters/>
        </div>
        <>
        <ProductGrid products={products}/>
        </>
    </article>
  )
}

export default CatalogPage
