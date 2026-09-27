'use client'
import { motionTokens, springs } from '@/shared/lib/motion-tokens'
import { MapPin, Utensils } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import 'swiper/css'

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.1 },
	},
}

const item = {
	hidden: { opacity: 0, y: motionTokens.distance.md },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
	},
}

const Hero = () => {
	const reduce = useReducedMotion()

	const infoItems = [
		'Без заморозки від учора',
		"Тільки фермерське м'ясо",
		'Відкрита кухня у центрі Києва',
		'Час видачі: 5-7 хв',
	]
	return (
		<section>
			<motion.div
				className='container mx-auto mt-5 lg:mt-8 lg:flex gap-5 lg:h-110'
				variants={container}
				initial={reduce ? false : 'hidden'}
				animate='visible'
			>
				<div className='w-full lg:w-1/2 lg:flex-1'>
					<motion.h1
						variants={item}
						className='text-neutral font-semibold text-4xl lg:text-[48px] font-lora'
					>
						Шаурма, яку <span className='text-primary-dark after:absolute underline'>хочеться<br /> повторити</span>
					</motion.h1>
					<motion.p
						variants={item}
						className='text-tertiary font-manrope font-normal text-[22px] mt-6'
					>
						Справжнє м'ясо з вертеля на вогні, щедра
						порція сиру та хрусткий лаваш. Готуємо
						щодня як для найкращих друзів.
					</motion.p>
					<motion.div variants={item} className='mt-6 flex flex-wrap gap-3'>
						<motion.button
							whileHover={reduce ? undefined : { scale: motionTokens.scale.pop }}
							whileTap={reduce ? undefined : { scale: motionTokens.scale.press }}
							transition={springs.snappy}
							className='bg-primary-dark text-white font-manrope font-bold text-[14px] px-6 py-4 rounded-lg hover:bg-primary transition-colors duration-300 w-54 flex items-center gap-2 justify-center flex-nowrap md:inline-flex md:mr-4 md:w-1/3'
						>
							<a href="#menu">Переглянути меню</a>
							<Utensils size={20} />
						</motion.button>
						<motion.button
							whileHover={reduce ? undefined : { scale: motionTokens.scale.pop }}
							whileTap={reduce ? undefined : { scale: motionTokens.scale.press }}
							transition={springs.snappy}
							className='bg-[#f9ebe7] text-neutral font-manrope font-bold text-[14px] px-6 py-4 rounded-lg hover:bg-[#f9ebe7]/60 transition-colors duration-300 w-[calc(216px-5%)] flex items-center gap-2 justify-center flex-nowrap md:inline-flex md:w-1/4'

						>
							<a href='#whereWeAre'>Як нас знайти</a>
							<MapPin size={20} color='#a93103' />
						</motion.button>
					</motion.div>
					<motion.div
						variants={item}
						className="grid grid-cols-3 gap-4 mt-6 lg:mt-10"
					>
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
					</motion.div>
				</div>
				<motion.div
					initial={reduce ? false : { opacity: 0, scale: 1.04 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
					className='relative mt-6 w-full aspect-4/3 lg:mt-0 lg:w-1/2 lg:flex-1 '
				>
					<Image alt='Shawarma' src={'/shawarma.png'} fill className='rounded-[10px] object-cover' quality={100} />
				</motion.div>
			</motion.div>

			<motion.article
				initial={reduce ? false : { opacity: 0, y: motionTokens.distance.sm }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-80px' }}
				transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}
				className='w-full bg-[#f3e5e1] py-3 px-4 lg:mt-10 flex flex-wrap md:flex-nowrap md:justify-between md:mt-4 mt-2'
			>
				{infoItems.map((item, index) => (
					<div key={index} className='flex gap-2 items-center container'>
						<div className='size-2 bg-primary-dark rounded-full' />
						<span className='text-tertiary font-semibold text-[15px]'>{item}</span>
					</div>
				))}
			</motion.article>
		</section>
	)
}
export default Hero
