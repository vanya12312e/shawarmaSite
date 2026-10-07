import { Product } from '@/widgets/Products/types'
import { create } from 'zustand'

const mockProducts: Product[] = [
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