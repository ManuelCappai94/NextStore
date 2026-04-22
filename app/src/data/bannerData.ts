import type { Banner } from "@/app/types/banner"
import electronics from "@/app/assets/banner_images/electronics.png"
import fashion from "@/app/assets/banner_images/fashion.png"
import house from "@/app/assets/banner_images/house.png"
import beauty from "@/app/assets/banner_images/beauty.png"
import sport from "@/app/assets/banner_images/sport.png"

export const banners: Banner[] = [
  {
    _id: 0,
    title: "Acquista il tuo nuovo MacBook",
    text: "Scopri tra tante offerte esclusive prodotti all'avanguardia",
    image: electronics,
    category: "electronics",
    textTheme: "light"
  },
  {
    _id: 1,
    title: "Rinnova il tuo stile",
    text: "Scopri le ultime tendenze e crea il tuo look perfetto",
    image: fashion,
    category: "fashion",
    textTheme: "light"
  },
  {
    _id: 2,
    title: "Dai nuova vita alla tua casa",
    text: "Trasforma ogni ambiente con prodotti pensati per comfort e design",
    image: house,
    category: "home",
    textTheme: "dark"
  },
  {
    _id: 3,
    title: "Esalta la tua bellezza",
    text: "Scopri prodotti selezionati per prenderti cura di te ogni giorno",
    image: beauty,
    category: "beauty",
    textTheme: "light"
  },
  {
    _id: 4,
    title: "Supera i tuoi limiti",
    text: "Attrezzatura e accessori per portare le tue performance al livello successivo",
    image: sport,
    category: "sports",
    textTheme: "dark"
  }
]