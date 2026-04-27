"use client"
import { useState, useRef} from "react"
import style from "./productDetail.module.css"
import type { Product } from "@/app/types/products"
import { discountCalc } from "@/app/lib/helpers/percentageCalc"
import { starsRating } from "@/app/lib/helpers/StarCreator"
import { Avaiability } from "@/app/components/Avaiability/Avaiability"
import RowProductSection from "@/app/components/RowProductSection/RowProductSection"
import type { ReviewsApiResponse, EnrichedReviews } from "@/app/types/review"
import { FaUserCircle } from "react-icons/fa";

type DetailsProps = {
    product : Product
    related : Product[]
    reviews : ReviewsApiResponse
}

//probabilemte serve un hook di ottimizzazione, ogni volta che clicco per cambiare immagine pare ricreare l'intero componente
const ProductDetail = ({product, related, reviews} : DetailsProps) => {
    const [onSpotlight, setOnSpotlight] = useState(product.images[0] ?? "")
    
    const isOnStock =
    product.availabilityStatus === "In Stock" ||
    product.availabilityStatus === "Low Stock"
    const reviewsRef = useRef<HTMLDivElement>(null)
    
    const goToComments = () =>{
        if(!reviewsRef.current)return
        reviewsRef.current?.scrollIntoView({ block: "center", behavior: "smooth" })
    }
  return (
    <article className={style.container}>
        <div className={style.firstRow}>
            <div className={style.imgContainer}>
                <div className={style.thumbnails}>
                {
                    product.images.map((image, index)=>{
                        return (
                            <img
                                src={image}
                                alt= {product.title}
                                key={index}
                                className={`${style.thumbnail} ${
                                onSpotlight === image ? style.active : ""
                                }`}
                                onClick={()=> setOnSpotlight(image)}
                            />
                        )
                    })
                }
                </div>
                <div className={style.imgOnSpotlight}>
                <img 
                    src={onSpotlight}
                    alt = {product.title}
                    className={style.spotlight}
                />
                </div>
            </div>
            <div className={style.infoContainer}>
                <h1 className={style.title}>{product.title}</h1>
                <p className={style.desc}>{product.description}</p>
                <div className={style.priceSection}>
                    <p className={style.finalPrice}>
                        {product.price}
                        <span className={style.currency}>€</span>
                        </p>
                    <p className={style.discount}>{product.discountPercentage}%</p>
                    <p className={style.originalPrice}>
                        {discountCalc(product.price, product.discountPercentage)}€
                    </p>
                </div>
                    <div className={style.ratingSection}>
                        <p><span className={style.stars}>{starsRating(product.rating)}</span> {product.rating}</p>
                        <button 
                            className={style.ratingBtn}
                            type="button"
                            onClick={goToComments}
                            >({product.reviews?.length})
                        </button>
                    </div>
                <section className={style.avaiabilityInfo}>
                        <p className={style.shipping}>
                                {product.shippingInformation}
                        </p>
                    <p>{product.warrantyInformation}</p>
                    <span className={style.avaiability}>
                        <Avaiability {...product}/>
                    </span>
                    <button
                        type="button"
                        className={isOnStock ?  style.cart : style.notAvaiable}
                        onClick={()=>{"aggiugi al carrello"}}
                        >
                        {isOnStock ? "Aggiungi al carrello" : "Non disponibile"}
                    </button>
                </section>
            </div>
        </div>
        <section className={style.secondRow}>
            <details className={style.specs}>
                <summary>Caratteristiche e specifiche</summary>
               <dl className={style.specList}>
                    <div className={style.specItem}>
                        <dt>Brand</dt>
                        <dd>{product.brand}</dd>
                    </div>

                    <div className={style.specItem}>
                        <dt>Peso</dt>
                        <dd>{product.weight}</dd>
                    </div>

                    <div className={style.specItem}>
                        <dt>Altezza</dt>
                        <dd>{product.dimensions?.height}</dd>
                    </div>

                    <div className={style.specItem}>
                        <dt>Larghezza</dt>
                        <dd>{product.dimensions?.width}</dd>
                    </div>

                    <div className={style.specItem}>
                        <dt>Spessore</dt>
                        <dd>{product.dimensions?.depth}</dd>
                    </div>

                    <div className={style.specItem}>
                        <dt>SKU</dt>
                        <dd>{product.sku}</dd>
                    </div>
                </dl>
            </details>
       
            <details className={style.specs}>
                <summary>Informazioni prodotto</summary>
                <div className={style.specList}>
                    <p>Barcode: {product.meta?.barcode}</p>
                    <img className={style.qrCode} src={product.meta?.qrCode} alt="QR code" />
                </div>
            </details>
        </section>
            <section className={style.thirdRow}>
                <RowProductSection products={related} description="Vedi Prodotti Correlati" categoryLabel={product.category}/>
            </section>
            <section className={style.commentsRow}>
                <h1>Recensioni Clienti</h1>
                <div ref={reviewsRef} className={style.usersRewiews}>
                    <Reviews reviews={reviews.reviews} />
                </div>
            </section>
    </article>
  )
}
type ReviewsProps = {
  reviews: EnrichedReviews[]
}

const Reviews = ({reviews} :ReviewsProps )=>{

    return(
     <>
        {
            reviews.map((review, index)=>{
                return(
                    <ul key={index} className={style.comments}>
                        <li className={style.userAccount}>
                            <div className={style.userImage}>
                                <img src={review.user.image ? review.user.image : ""} alt="user_image" />
                            </div>
                        <span>{review.reviewerName}</span>
                        </li>
                        <li className={style.stars}>{starsRating(review.rating)}</li>
                        <li>{review.comment}</li>
                        <li className={style.reviewDate}>commento rilasciato il:{new Date(review.date).toLocaleDateString()}</li>
                    </ul>
                )
            })
        }
    </>
    )
}
export default ProductDetail
