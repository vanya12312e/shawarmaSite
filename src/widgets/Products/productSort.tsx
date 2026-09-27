'use client'
import { useProductsStore } from '@/store/store'
import ProductsList from './ProductsList'
import Categories from './categories'
const ProductSort = () => {

	const { products } = useProductsStore()
	return (
		<>
			<section className='container mx-auto mt-4 lg:flex lg:justify-between '>
				<div>
					<p className='text-primary-dark font-manrope font-bold text-[13px]'>Справжній смак</p>
					<h1 className='text-2xl font-bold text-neutral font-lora mt-1' id='menu'>Наше меню</h1>
					<p className='text-tertiary font-manrope text-[15px] leading-[1.6]'>
						Готуємо від душі — ситно, смачно та без
						компромісів. Вибирай свою улюблену або
						спробуй новинку!
					</p>
				</div>
				<Categories />
			</section>
			<ProductsList products={products} />
		</>
	)
}

export default ProductSort