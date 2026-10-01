import { create } from 'zustand'
import { Product } from '@/widgets/Products/types'
import { CATEGORIES } from '@/widgets/Products/types'

const mockProducts: Product[] = [
  { id: 1, name: 'Шаурма класична', price: 155, category: CATEGORIES.Shawarma, image_url: '/shawarma.png', weight: 450, description: 'Соковите куряче м’ясо, свіжі овочі та фірмовий соус у хрусткому лаваші.' },
  { id: 2, name: 'Шаурма сирна', price: 175, category: CATEGORIES.Shawarma, image_url: '/shawarma.png', weight: 480, description: 'Куряче м’ясо, сир, свіжі овочі та ніжний фірмовий соус.' },
  { id: 3, name: 'Шаурма гостра', price: 165, category: CATEGORIES.Shawarma, image_url: '/shawarma.png', weight: 450, description: 'Куряче м’ясо, овочі та пікантний гострий соус у лаваші.' },
  { id: 4, name: 'Кола', price: 45, category: CATEGORIES.Drink, weight: 500, description: 'Охолоджений газований напій.', image_url: '/coca-cola.png' },
  { id: 5, name: 'Вода', price: 30, category: CATEGORIES.Drink, weight: 500, description: 'Питна вода без газу.', image_url: '/coca-cola.png' },
]

type ProductsState = {
  products: Product[]
  allProducts: Product[]
  isLoading: boolean
  error: string | null

  setProducts: (products: Product[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  filterProducts: (callback: (product: Product) => boolean) => void
}

export const useProductsStore = create<ProductsState>()((set) => ({
  products: mockProducts,
  allProducts: mockProducts,
  isLoading: false,
  error: null,

  setProducts: (products) =>
    set(() => ({
      products,
      allProducts: products,
      isLoading: false,
      error: null,
    })),

  setLoading: (isLoading) =>
    set(() => ({ isLoading })),

  setError: (error) =>
    set(() => ({ error, isLoading: false })),

  filterProducts: (callback) =>
    set((state) => ({
      products: state.allProducts.filter(callback),
    })),
}))