// lib/data/products.ts
export interface Product {
  id: number
  slug?: string
  name: string
  category: 'coconut-oil' | 'coconut-sugar' | 'coconut-aminos' | 'coconut-nectar' | 'coconut-syrup'
  image?: string
  images?: string[]
  badge?: string
  description?: string
  benefits?: string[]
  price?: string
  unit?: string
  specifications?: { [key: string]: string }
  ingredients?: string
  usage?: string
  priceList?: any[]
  variants?: any[]
  relatedIds?: number[]
}

export interface ProductVariant {
  id: string;
  name: string;
  image?: string;
  price?: string;
  description?: string;
  benefits?: string[];
  usage?: string;
  specifications?: { [key: string]: string };
  priceList?: any[];
}