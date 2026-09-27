import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export enum CATEGORIES {
	Shawarma = 'Шаурма',
	Drink = 'Напої'
}

export type IProduct = {
	id: number,
	name: string,
	price: string | number,
	category: CATEGORIES
	thumbnail?: string | StaticImport,
	weight: number | string | null
	description: string
}