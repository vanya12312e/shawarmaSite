export interface Product {
  id: number
  name: string
  price: number
  category: 'Шаурма' | 'Напій'
  image_url?: string | null
  weight: number | null
  description: string
  created_at?: string
}

export type ProductCategory = Product['category']

export const CATEGORIES = {
  Shawarma: 'Шаурма' as const,
  Drink: 'Напій' as const,
} as const