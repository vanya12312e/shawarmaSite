import { CATEGORIES, IProduct } from '@/widgets/Products/interface'
import { create, ExtractState } from 'zustand'

const initialState: IProduct[] = [
	{ id: 1, name: 'Шаурма класична', price: 155, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Соковите куряче м’ясо, свіжі овочі та фірмовий соус у хрусткому лаваші.' },
	{ id: 2, name: 'Шаурма сирна', price: 175, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 480, description: 'Куряче м’ясо, сир, свіжі овочі та ніжний фірмовий соус.' },
	{ id: 3, name: 'Шаурма гостра', price: 165, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Куряче м’ясо, овочі та пікантний гострий соус у лаваші.' },
	{ id: 4, name: 'Кола', price: 45, category: CATEGORIES.Drink, weight: 500, description: 'Охолоджений газований напій.', thumbnail: '/coca-cola.png' },
	{ id: 5, name: 'Вода', price: 30, category: CATEGORIES.Drink, weight: 500, description: 'Питна вода без газу.', thumbnail: '/coca-cola.png' },
	{ id: 6, name: 'Шаурма класична', price: 155, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Соковите куряче м’ясо, свіжі овочі та фірмовий соус у хрусткому лаваші.' },
	{ id: 7, name: 'Шаурма сирна', price: 175, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 480, description: 'Куряче м’ясо, сир, свіжі овочі та ніжний фірмовий соус.' },
	{ id: 8, name: 'Шаурма гостра', price: 165, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Куряче м’ясо, овочі та пікантний гострий соус у лаваші.' },
	{ id: 9, name: 'Кола', price: 45, category: CATEGORIES.Drink, weight: 500, description: 'Охолоджений газований напій.', thumbnail: '/coca-cola.png' },
	{ id: 10, name: 'Вода', price: 30, category: CATEGORIES.Drink, weight: 500, description: 'Питна вода без газу.', thumbnail: '/coca-cola.png' },
	{ id: 11, name: 'Шаурма класична', price: 155, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Соковите куряче м’ясо, свіжі овочі та фірмовий соус у хрусткому лаваші.' },
	{ id: 12, name: 'Шаурма класична', price: 155, category: CATEGORIES.Shawarma, thumbnail: '/shawarma.png', weight: 450, description: 'Соковите куряче м’ясо, свіжі овочі та фірмовий соус у хрусткому лаваші.' },
]

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
