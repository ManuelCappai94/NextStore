import { NextResponse } from "next/server";
import api from "@/app/lib/axios";
import {Review, User, EnrichedReviews, UsersResponse} from "@/app/types/review"
import { Product } from "@/app/types/products";


type RouteParams = {
    params: Promise<{
        id: string
    }>
}

//productData mi ritorna il prodotto relativo alla pagine di quell ID, quindi devo matchare quel prodotto, dal quale posso accedere alla sue reviews, con i dati degli users, cosi che posso farmi tornare le loro foto profilo 
//userDta mi ritorna un array quindi mappo i dati per prendere il nome e il cognome
export async function GET(_requests : Request, {params}: RouteParams){
    const {id}= await params
  try {
        const { data : productData} = await api.get<Product>(`/products/${id}`)
        const {data : userData} = await api.get<UsersResponse>(`/users?limit=0&select=id,firstName,lastName,image`)
        
        const enrichedReviews : EnrichedReviews[]  = productData.reviews.map((review : Review) =>{
            const matchUser = userData.users.find((user : User)=>{
                
                const fullName = `${user.firstName} ${user.lastName}`
                
                return fullName === review.reviewerName
            })
            return {
                ...review,
                user: matchUser 
                ? {
                    id: matchUser.id,
                    name: review.reviewerName,
                    image: matchUser.image,
                } 
                : {
                    id: null,
                    name: review.reviewerName,
                    image: null,
                }
            }
        })
       
        return NextResponse.json({
            ProductId: productData.id,
            reviews : enrichedReviews
        
            })
            
    } catch {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
        )
    }
 
}