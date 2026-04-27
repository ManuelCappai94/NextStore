 import type { Product } from "@/app/types/products"
 import style from "./avaiability.module.css"
 
 export const Avaiability = ({availabilityStatus, stock}: Product) =>{
    if(availabilityStatus === "In Stock"){
      return <p>Acquista ora</p>
    }else if(availabilityStatus === "Low Stock"){
      return <p>Solo <span className={style.stock}>{stock}</span> rimanenti !</p>
    } else {
      return <p>Tornerà Presto !</p>
    }
  }