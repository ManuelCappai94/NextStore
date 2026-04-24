
import { getProductsByCategory } from '@/app/lib/fetchProducts'
import CatalogPage from '@/app/components/catalogPage/CatalogPage'

import style from "../../catalogLayout.module.css"



const page = async ({params}: { params: Promise <{subcategory:string}>}) => {
    const {subcategory} = await params
    console.log(subcategory);

    const productsData = await getProductsByCategory(`${subcategory}`, 0)
    const products = productsData.products
  return (
    <section className={style.container}>
      <CatalogPage
       products={products}
       categoryLabel={subcategory}
       />
    </section>
  )
}

export default page
