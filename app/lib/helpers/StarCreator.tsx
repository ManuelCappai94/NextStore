import {IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export function starsRating(num: number){
    return Array.from({length: 5},(_, index)=>{
        if(num >= index + 1){
            return <IoIosStar key={index}/>
        } else if(num >= index + 0.5){
            return <IoIosStarHalf key={index}/>
        } else {
          return  <IoIosStarOutline key={index}/>
        }
    })
}
//ho usato index come key perchè l'array ha una lunhezza fissa e ordine fisso