import type { ProductsResponse } from "../types/products"
import type { Product } from "../types/products"
import api from "./axios"

// const BASE_URL = "https://dummyjson.com"


export async function getProductsByCategory (
    category: string, 
    limit?: number
    ):Promise<ProductsResponse>{
    try {
    
        const {data} = await api.get<ProductsResponse>(
            `/products/category/${category}`,
            {
                params: limit !== undefined ? {limit} : {}
            }
        )
       
            return  data
    } catch (error) {
        console.error("Errore singole categorie", error);
        throw error; // questo qua lo propaga dentro next.js, cosi che lo gestisce con il fallback automatico, o error.tsx
    }
}

export async function getAllProducts (
    limit: number
    ):Promise<ProductsResponse>{
    try{
        const {data} = await api.get<ProductsResponse>(
            `/products/`,
            {
                params: {limit} 
            }
        )
        // è importante chè il value assegnato alla key params sia passata come oggetto, se no è undefined
      
            return data
    } catch(error){
        console.error("Errore tutte le categorie", error);
        throw error
    }
}

export async function getSingleProduct(
    id: string
): Promise<Product> {
    try{
        const {data} = await api.get<Product>(
            `/products/${id}`
        )
        return data
    } catch(error){
        console.error("errore fetch singolo prodotto")
        throw error
    }
}