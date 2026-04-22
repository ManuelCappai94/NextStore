import { StaticImageData } from "next/image"

export type Banner = {
  _id: number
  title: string
  text: string
  image: StaticImageData | string
  category: string
  classes?: string
  textTheme: string
}