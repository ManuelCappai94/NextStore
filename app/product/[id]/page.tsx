
import { getSingleProduct } from '@/app/lib/fetchProducts'
import { getProductsByCategory } from '@/app/lib/fetchProducts'
import ProductDetail from '../ProductDetail/ProductDetail'
import style from "./page.module.css"
import {internalApi} from "@/app/lib/axios"
import type {  ReviewsApiResponse } from '@/app/types/review'


//se non estraggo direttamente data dalla mia API, mi ritorna tutto l'oggetto, che causa un API stack call, comunque va tipizzato.
const page = async({params}:{ params: Promise <{id:string}>}) => {
 const {id} = await params
  const product  = await getSingleProduct(id)
  const relatedData = await getProductsByCategory(product.category, 7)
  const relatedProduct = relatedData.products
  const {data}  = await internalApi.get<ReviewsApiResponse>(`api/product/${id}`)
  
  return (
    <section className={style.container}>
      <ProductDetail product={product} related={relatedProduct} reviews={data}/>
    </section>
  )
}

export default page
