import Hero from "./components/Hero/Hero";
import { getProductsByCategory, getAllProducts } from "./lib/fetchProducts";
import type { Product } from "./types/products";

export default async function Home() {


  const [firstRawData, secondRowData, thirdRowData] = await Promise.all([
    getAllProducts(0),
    getProductsByCategory("smartphones", 0),
    getProductsByCategory("sports-accessories", 0)
  ])

  const products: Product[] = firstRawData.products
    .sort((a,b)=>b.discountPercentage -a.discountPercentage)
    .slice(0, 20)
  const productsNd: Product[] = secondRowData.products
    .sort((a,b)=>b.rating - a.rating)
    .slice(0, 10)
  const productsRd: Product [] = thirdRowData.products
     .sort((a,b)=>b.rating - a.rating)
     .slice(0, 10)

  // console.log(productsRd)
  return (
    <div>
      <Hero 
      products={products} 
      productsNd={productsNd} 
      productsRd={productsRd}/>
    </div>
  );
}
