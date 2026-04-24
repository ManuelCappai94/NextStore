"use client"
import {useState, useRef, useEffect} from 'react'
import navStyles from "./Navbar.module.css"
import Link from 'next/link'
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { FaUser, FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { shopCategories } from '@/app/src/data/categories';
import { ShopCategories } from '@/app/types/shopCategory';


//la lista delle categorie ritorna una array di stringhe, itterandolo poi con il map, la singola categoria è type string
//devo impostare una soglia di tolleranza per quando il mouse lascia la casella hoover, e aggiustare nel css il (left: -100%)
//devo separare la desktop hover logic da mobile click logic, perchè Su mobile gli eventi mouse non servono davvero.

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const closeTimoeutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const  dropDownMenu = (category : ShopCategories) =>{
        if(openCategory === category.slug) return null
        else return category.slug
    }

    const handleMouseEnter = (category : string )=>{
        if(closeTimoeutRef.current){
            clearTimeout(closeTimoeutRef.current)
            closeTimoeutRef.current = null
        }
        setOpenCategory(category)
    }
    const handleMouseLeave = ()=>{
        closeTimoeutRef.current = setTimeout(() =>{
            setOpenCategory(null)
        }, 200)
    }
    useEffect(()=>{
        return () => {
            if (closeTimoeutRef.current){
                clearTimeout(closeTimoeutRef.current)
            }
        }
    }, [])

  return (
    <nav className={navStyles.container}>
     <div className={navStyles.topRow}>
        <button className={navStyles.menuButton}>
            <IoMenuSharp 
                className={`${navStyles.menuIcon} ${isActive ? navStyles.active : ""}`}
                onClick={()=> setIsActive(!isActive)}/>
        </button>
        <Link href="/" className={navStyles.navLogo} >Logo</Link>
    
     <div className={navStyles.icons}>
        <div className={navStyles.desktopActions}>
            <Link href="/account"><FaUser /></Link>
            <Link href="/wishlist"><FaHeart /></Link>
        </div>
        <Link href="/cart" className={navStyles.cart} >
            <FaShoppingCart/>
        </Link>
     </div>
    </div>
    <form className={navStyles.searchBar}>
        <input type="text" placeholder="Search products..." />
        <button type="submit"><FaSearch /></button>
    </form>

    <div className={`${navStyles.menu} ${isActive ? navStyles.showMenu :    ""}`}>
        <ul className={navStyles.ulLinks}>
            <li><Link href="/account"><FaUser /><span>Account</span></Link></li>
            <li><Link href="/wishlist"><FaHeart /><span>Wishlist</span></Link></li>
            <li> <button type="button" onClick={()=> setIsActive(false)}><IoClose/></button></li>
        </ul>
        <ul className={navStyles.categories}>
            {
                shopCategories.map((category)=>(
                    <li 
                        key={category.label} 
                        className={`${navStyles.categoryItem} ${openCategory === category.slug ? navStyles.activeCategory : ""}`}                            
                        onMouseEnter={()=>handleMouseEnter(category.slug)}
                        onMouseLeave={handleMouseLeave}>
                        <div 
                            className={navStyles.categoryLabels}
                        >
                            <Link  href={`/categories/${category.slug}`}>
                            {category.label}
                            </Link>
                            <button 
                                type="button" 
                                onClick={()=>setOpenCategory(dropDownMenu(category))}
                                className={navStyles.categoryBtn}
                                >
                                <IoIosArrowDown/>
                            </button>
                        </div>
                        <ul className={
                            openCategory === category.slug
                            ? navStyles.showCategory
                            : navStyles.categoryList   
                            }>
                            {
                                category.items.map((singleCategory)=>(
                            <li key={singleCategory.slug} className={navStyles.singleCategory}>
                                <Link href={`/categories/${category.slug}/${singleCategory.slug}`}>{singleCategory.label}
                                </Link>
                            </li>
                                ))
                            }
                            
                        </ul>
                    </li>
                ))
            }
        </ul>
    </div>     
    </nav>
  )
}

export default Navbar
