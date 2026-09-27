'use client'
import { MapPin, Utensils } from 'lucide-react'
import Image from 'next/image'
import 'swiper/css'

const Hero = () => {

	const infoItems = [
		'Без заморозки від учора',
		"Тільки фермерське м'ясо",
		'Відкрита кухня у центрі Києва',
		'Час видачі: 5-7 хв',
	]
	return (
		<section>
			<div className='container mx-auto mt-5 lg:mt-8 lg:flex gap-5 lg:h-110'>
				<div className='w-full lg:w-1/2 lg:flex-1'>
					<h1 className='text-neutral font-semibold text-4xl lg:text-[48px] font-lora'>Шаурма, яку <span className='text-primary-dark after:absolute underline'>хочеться<br /> повторити</span></h1>
					<p className='text-tertiary font-manrope font-normal text-[22px] mt-6'>
						Справжнє м'ясо з вертеля на вогні, щедра
						порція сиру та хрусткий лаваш. Готуємо
						щодня як для найкращих друзів.
					</p>
					<button className='bg-primary-dark text-white font-manrope font-bold text-[14px] px-6 py-4 rounded-lg mt-6 hover:bg-primary transition-all duration-300 w-54 flex items-center  gap-2 justify-center flex-nowrap md:inline-flex md:mr-4 md:w-1/3'>

						<a href="#menu">Переглянути меню</a>
						<Utensils size={20} />
					</button>
					<button className='bg-[#f9ebe7] text-neutral font-manrope font-bold text-[14px] px-6 py-4 rounded-lg mt-3 hover:bg-[#f9ebe7]/60 transition-all duration-300 w-[calc(216px-5%)] flex items-center  gap-2 justify-center flex-nowrap md:inline-flex md:w-1/4'>
						Як нас знайти
						<MapPin size={20} color='#a93103' />
					</button>
					<div className="grid grid-cols-3 gap-4 mt-6 lg:mt-10">
						{[
							['Тільки свіже', "М'ясо з вертеля"],
							['Хрусткий лаваш', 'Прямо з грилю'],
							['Крафтові соуси', 'Власний рецепт'],
						].map(([title, description]) => (
							<div
								key={title}
								className="bg-[#fef1ed] rounded-sm py-2 px-1 flex flex-col"
							>
								<h2 className="font-bold text-[18px] text-neutral">{title}</h2>
								<p className="text-lg font-semibold text-tertiary">{description}</p>
							</div>
						))}
					</div>
				</div>
				<div className='relative mt-6 w-full aspect-4/3 lg:mt-0 lg:w-1/2 lg:flex-1 '>
					<Image alt='Shawarma' src={'/shawarma.png'} fill className='rounded-[10px] object-cover' quality={100} />
				</div>
			</div>

			<article className='w-full bg-[#f3e5e1] py-3 px-4 lg:mt-10 flex flex-wrap md:flex-nowrap md:justify-between md:mt-4 mt-2'>
				{infoItems.map((item, index) => (
					<div key={index} className='flex gap-2 items-center container'>
						<div className='size-2 bg-primary-dark rounded-full' />
						<span className='text-tertiary font-semibold text-[15px]'>{item}</span>
					</div>
				))}
			</article>
		</section>
	)
}
export default Hero