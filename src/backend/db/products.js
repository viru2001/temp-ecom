import { v4 as uuid } from "uuid";
import {
  Headphone1,
  Headphone2,
  Mouse1,
  Mouse2,
  Keyboard1,
  Keyboard2,
  Monitor1,
  Monitor2,
  Chair1,
  Chair2
} from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Redgear Wired Gaming Headphones with RGB LED Effect",
    discountPrice: 1790,
    originalPrice: 2999,
    categoryName: "headphone",
    tag: "Best Seller",
    savePercent: 40,
    img: Headphone1,
  },
  {
    _id: uuid(),
    name: "boAt Immortal IM-1300 Over-Ear Wireless Gaming Headphone with Mic",
    discountPrice: 4099,
    originalPrice: 9999,
    categoryName: "headphone",
    tag: "",
    savePercent: 59,
    img: Headphone2,
  },
  {
    _id: uuid(),
    name: "Redgear Wired Gaming Mouse with RGB LED, Lightweight and Durable Design",
    discountPrice: 299,
    originalPrice: 699,
    categoryName: "mouse",
    tag: "Limited Time Deal",
    savePercent: 57,
    img: Mouse1,
  },
  {
    _id: uuid(),
    name: "Acer Nitro Wired Optical Gaming Mouse (NMW810, Black)",
    discountPrice: 1749,
    originalPrice: 1999,
    categoryName: "mouse",
    tag: "",
    savePercent: 13,
    img: Mouse2,
  },
  {
    _id: uuid(),
    name: "Zebronics USB Keyboard (Bottom Rubber Grip, Max Plus V2, Black)",
    discountPrice: 2999,
    originalPrice: 6499,
    categoryName: "keyboard",
    tag: "",
    savePercent: 54,
    img: Keyboard1,
  },
  {
    _id: uuid(),
    name: "Thermaltake X1 RGB Gaming Keyboard (KB-TPX-SSBRUS-01, Silver)",
    discountPrice: 14350,
    originalPrice: 14350,
    categoryName: "keyboard",
    tag: "",
    savePercent: 0,
    img: Keyboard2,
  },
  {
    _id: uuid(),
    name: "Samsung G5 68.58cm (27 Inches) WQHD QLED Gaming 144Hz Monitor",
    discountPrice: 23899,
    originalPrice: 30000,
    categoryName: "monitor",
    tag: "",
    savePercent: 37,
    img: Monitor1,
  },
  {
    _id: uuid(),
    name: "Asus TUF 68.58cm (27 Inches) Full HD Flat Panel Gaming 165Hz Monitor",
    discountPrice: 27499,
    originalPrice: 34999,
    categoryName: "monitor",
    tag: "",
    savePercent: 21,
    img: Monitor2,
  },
  {
    _id: uuid(),
    name: "Greysteel Massage Gaming Chair with Foot Rest & Computer Ergonomic Chair",
    discountPrice: 16300,
    originalPrice: 33000,
    categoryName: "chair",
    tag: "",
    savePercent: 51,
    img: Chair1,
  },
  {
    _id: uuid(),
    name: "Vertagear Racing Series S-Line SL1000 Gaming Chair Black/Blue Edition",
    discountPrice: 29999,
    originalPrice: 33999,
    categoryName: "chair",
    tag: "",
    savePercent: 12,
    img: Chair2,
  },
];
