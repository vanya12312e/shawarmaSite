'use client'

import { useProductsStore } from '@/store/store'
import { useState } from 'react'
import { CATEGORIES } from './interface'
const Categories = () => {

	const { filterProducts } = useProductsStore()

	const categories = [
		{ id: 1, name: 'Усе меню', onClick: () => { return filterProducts((p) => p.id != null) } },
		{ id: 2, name: 'Фірмова шаурма', onClick: () => { return filterProducts((p) => p.category === CATEGORIES.Shawarma) } },
		{ id: 3, name: 'Напої', onClick: () => { filterProducts((p) => p.category === CATEGORIES.Drink) } },
	]

	const [activeCategory, setActiveCategory] = useState<number>(1)

	return (
		<section className='max-sm:container max-sm:mx-auto bg-[#f9ebe7] p-1 rounded-sm lg:h-1/2 lg:flex gap-1 mt-auto'>
			{categories.map((category) => (
				<button
					key={category.id}
					className={`font-semibold text-[14px] py-2 px-4 rounded-sm transition-all duration-300
							lg:h-full ${activeCategory === category.id
							? 'bg-primary-dark text-white'
							: 'bg-transparent text-tertiary'
						}`}
					onClick={() => {
						setActiveCategory(category.id)
						category.onClick()
					}
					}
				>
					{category.name}
				</button>
			))}
		</section>
	)
}

export default Categories