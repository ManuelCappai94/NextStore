import React from 'react'
import { getSingleProduct } from '@/app/lib/fetchProducts'
import ProductDetail from '../ProductDetail/ProductDetail'


const page = async({params}:{ params: Promise <{id:string}>}) => {
 const {id} = await params
  const product  = await getSingleProduct(id)

  return (
    <section>
      <ProductDetail product={product}/>
    </section>
  )
}

export default page
