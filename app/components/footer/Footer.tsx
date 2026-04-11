import React from 'react'
import styles from "./footer.module.css"
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
  <footer className={styles.footer}>
  <div className={styles.container}>
    
    <div>
      <h3>MyShop</h3>
      <p>Il tuo e-commerce di fiducia</p>
      <span className={styles.iconsRow}><IoMailOutline/><p>Email: info@myshop.com</p></span>
      <span className={styles.iconsRow}><MdOutlinePhone/><p>+39 999999999</p></span>
    </div>

    <div>
      <h4>Società</h4>
      <ul>
        <li><Link href="/about">Chi Siamo</Link></li>
        <li><Link href="/about">Domande Frequenti</Link></li>
        <li><Link href="/about">Vendi su MyShop</Link></li>
      </ul>
    </div>

    <div>
      <h4>Seguici sui Social</h4>
      <ul>
        <span className={styles.iconsRow}><FaFacebook/><li><a 
        href="https://it-it.facebook.com/"
        target='_blank'
        rel='noopener noreferrer'>
          Facebook</a></li></span>
        <span className={styles.iconsRow}><FaInstagram/><li><a 
        href="https://www.instagram.com/"
        target='_blank'
        rel='noopener noreferrer'>
          Instagram</a></li></span>
        <span className={styles.iconsRow}><FaTiktok/><li><a 
        href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F&lang=en&enter_method=mandatory"
        target='_blank'
        rel='noopener noreferrer'>
          TikTok</a></li></span>
      </ul>
    </div>

    <div>
      <h4>Supporto</h4>
      <ul>
        <li><Link href="/contacts">Assistenza</Link></li>
        <li><Link href="/contacts">Resi</Link></li>
        <li><Link href="/contacts">Privacy</Link></li>
      </ul>
    </div>

  </div>

  <div className={styles.bottom}>
    <p>© 2026 MyShop - Tutti i diritti riservati</p>
  </div>
</footer>
  )
}

export default Footer
