import React from 'react'
import style from "./filters.module.css"
const Filters = () => {
  return (
        <div className={style.filterContainer}>
        <ul className={style.filterList}>
            <li>filtra per:</li>
            <li>prezzo</li>
            <li>brand</li>
            <li>rating</li>
        </ul>
      </div>
  )
}

export default Filters
