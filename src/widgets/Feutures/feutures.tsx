'use client'

import { motionTokens } from '@/shared/lib/motion-tokens'
import { Reveal } from '@/shared/ui/Reveal'
import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

const stats = [
	{ value: '5-7 хв', label: 'і твоя гаряча шаурма в руках' },
	{ value: '12+', label: 'Прянощів у нашому маринаді' },
	{ value: '100%', label: 'Чесна та відкрита кухня' },
]

const Feutures = () => {
	const reduce = useReducedMotion()

	return (
		<section className='w-full bg-[#fef1ed]' id='about'>
			<div className='container mx-auto lg:flex lg:gap-8 py-15'>
				<motion.div
					initial={reduce ? false : { opacity: 0, x: -motionTokens.distance.lg }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
					className='relative w-full h-66 lg:w-1/2 lg:h-130'
				>
					<Image
						fill
						src='/room.png'
						className='rounded-xl object-cover'
						alt='room'
					/>
				</motion.div>
				<div className='w-full lg:w-1/2 mt-5 lg:my-auto'>
					<Reveal>
						<div className='flex items-center gap-2'>
							<div className='rounded-full size-2 text-center bg-primary-dark' />
							<p className='font-semibold text-primary-dark text-[13px] lg:text-[16px]'>
								Наша філософія
							</p>
						</div>

						<h1 className='font-lora text-neutral text-3xl font-semibold whitespace-pre-line mb-3 lg:text-4xl'>
							Готуємо по-людськи:
							щедро, смачно й чесно
						</h1>
					</Reveal>

					<Reveal delay={0.08}>
						<p className='text-tertiary lg:text-[18px]'>
							Ми відкрили{' '}
							<span className='text-neutral'>«Вогонь & Лаваш»</span>, бо нам
							хотілося місця, де шаурма — це справжнє гастрономічне свято, а не
							лотерея. Без зайвого жиру, без вчорашніх заготовок і дешевих
							магазинних майонезів.
						</p>

						<p className='text-tertiary mt-2 lg:text-[18px]'>
							М'ясо маринуємо щоранку за власним рецептом з ароматними спеціями,
							лаваш беремо ще теплим з крафтової пекарні, а соуси замішуємо на
							густому свіжому йогурті.
						</p>

						<p className='text-tertiary mt-2 lg:text-[18px]'>
							Забігай у гості! У нас завжди тепло, класна музика та відкрита
							кухня — ти бачиш кожен рух майстра.
						</p>
					</Reveal>
					<motion.div
						initial={reduce ? false : 'hidden'}
						whileInView='visible'
						viewport={{ once: true, margin: '-80px' }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
						}}
						className='md:flex md:justify-between'
					>
						{stats.map((s) => (
							<motion.div
								key={s.value}
								variants={{
									hidden: { opacity: 0, y: motionTokens.distance.md },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
									},
								}}
								className='mt-4 text-tertiary font-medium'
							>
								<h2 className='text-primary-dark text-3xl font-semibold'>{s.value}</h2>
								{s.label}
							</motion.div>
						))}
					</motion.div>

				</div>
			</div>
		</section>
	)
}

export default Feutures
