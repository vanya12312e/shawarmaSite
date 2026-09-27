import Image from 'next/image'

import { IProduct } from './interface'

const ProductsList = ({ products }: { products: IProduct[] }) => {
	return (
		<section className='container flex flex-col items-center mt-4 md:grid md:grid-cols-4 gap-3 lg:mt-6'>
			{products.map((p) => {
				return (
					<div
						className='w-full max-w-[358px] mt-1 mb-4 bg-white rounded-xl md:max-w-[392px] lg:h-full lg:flex lg:flex-col lg:justify-between lg:p-2'
						key={p.id}
					>
						{p.thumbnail && (
							<div className='relative w-full h-[268px] md:h-[208px]'>
								<Image
									src={p.thumbnail}
									alt={p.name}
									fill
									className='rounded-xl object-cover'
								/>
							</div>
						)}

						<h2 className='text-primary-dark text-[13px] font-semibold font-manrope'>
							{p.category.toString()}

							{p.weight !== null && (
								<span>{' ' + p.weight}  г</span>
							)}
						</h2>

						<h1 className='text-2xl font-lora text-neutral font-bold'>
							{p.name}
						</h1>

						<p className='text-tertiary font-manrope text-[14px] leading-[1.6]'>
							{p.description}
						</p>

						<span className='flex justify-between my-4 text-primary-dark font-semibold'>
							Порція
							<p className='font-bold font-manrope text-2xl text-primary'>
								{p.price} ₴
							</p>
						</span>
					</div>
				)
			})}
		</section>
	)
}

export default ProductsList