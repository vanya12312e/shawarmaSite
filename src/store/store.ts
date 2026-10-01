import { IProduct } from '@/widgets/Products/interface'
import { create, ExtractState } from 'zustand'
import { Products } from './data'

const initialState: IProduct[] = Products

type ProductsState = {
	products: IProduct[]
	allProducts: IProduct[]

	addProduct: (product: IProduct) => void
	removeProduct: (id: number) => void
	filterProducts: (callback: (product: IProduct) => boolean) => void
}
export const useProductsStore = create<ProductsState>()((set) => ({
	products: initialState,
	allProducts: initialState,

	addProduct: (product) =>
		set((state) => ({
			products: [...state.products, product],
			allProducts: [...state.allProducts, product],
		})),

	removeProduct: (id) =>
		set((state) => ({
			products: state.products.filter((product) => product.id !== id),
			allProducts: state.allProducts.filter((product) => product.id !== id),
		})),

	filterProducts: (callback) =>
		set((state) => ({
			products: state.allProducts.filter(callback),
		})),
}))

export type ProductState = ExtractState<typeof useProductsStore>
