'use client'
import { motionTokens, springs } from '@/shared/lib/motion-tokens'
import { Reveal } from '@/shared/ui/Reveal'
import { Clock, MapPin, Navigation2, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const cards = [
	{
		iconBg: 'bg-primary-dark',
		icon: <MapPin color='#fff' strokeWidth={2} size={25} />,
		title: 'Адреса у Києві',
		body: (
			<>
				<p className='text-tertiary'>вул. Велика Васильківська, 42</p>
				<p className='font-semibold text-primary-dark text-[14px] mt-1'>
					ст. м. «Площа Українських Героїв» (2 хв
					пішки)
				</p>
			</>
		),
	},
	{
		iconBg: 'bg-[#864e2d]',
		icon: <Clock color='#fff' strokeWidth={2} size={25} />,
		title: 'Графік роботи',
		body: (
			<>
				<p className='text-neutral font-semibold text-[18px]'>Щодня: 10:00 — 22:00</p>
				<p className='text-tertiary text-[14px]'>
					Без вихідних та перерв на обід. Гриль
					смажить до 21:45.
				</p>
			</>
		),
	},
	{
		iconBg: 'bg-[#8f4e00]',
		icon: <Phone color='#fff' strokeWidth={2} size={25} />,
		title: 'Швидке передзамовлення',
		body: (
			<>
				<a className='text-primary-dark text-[20px] font-lora' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER?.toString().replace(/\D/g, '')}`}>
					{process.env.NEXT_PUBLIC_PHONE_NUMBER}
				</a>
				<p className='text-[#59413A] text-[14px]'>
					Телефонуйте за 10 хв до приходу —
					заберете без черги!
				</p>
			</>
		),
	},
]

const WhereWeAre = () => {
	const reduce = useReducedMotion()

	return (
		<>
			<Reveal className='container' y={motionTokens.distance.md}>
				<div id='whereWeAre'>
					<p className='text-primary-dark text-center font-medium mt-8'>Чекаємо в гості</p>
					<h1 className='font-lora text-3xl text-neutral font-semibold text-center'>
						Де ми знаходимось
					</h1>
					<p className='text-tertiary text-[17px] text-center mt-1'>
						Забігай на смачний перекус або бери з
						собою до парку. Ми поруч із метро «Площа
						Українських Героїв»!
					</p>
				</div>
			</Reveal>
			<section className='container mt-3 md:flex md:gap-4 md:mt-10'>
				<motion.div
					initial={reduce ? false : 'hidden'}
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
					}}
					className='rounded-sm flex flex-col gap-4 md:w-[40%]'
				>
					{cards.map((card) => (
						<motion.div
							key={card.title}
							variants={{
								hidden: { opacity: 0, y: motionTokens.distance.md },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
								},
							}}
							className='bg-[#f9ebe7] p-4 flex gap-4'
						>
							<div className={`${card.iconBg} p-3 rounded-md size-12 flex items-center justify-center shrink-0`}>
								{card.icon}
							</div>
							<div>
								<h2 className='font-manrope font-semibold text-[17px] text-neutral'>{card.title}</h2>
								{card.body}
							</div>
						</motion.div>
					))}
					<motion.button
						variants={{
							hidden: { opacity: 0, y: motionTokens.distance.md },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
							},
						}}
						whileHover={reduce ? undefined : { scale: motionTokens.scale.pop }}
						whileTap={reduce ? undefined : { scale: motionTokens.scale.press }}
						transition={springs.snappy}
						className='font-manrope bg-neutral text-white p-3 font-semibold flex justify-center gap-2 w-full rounded-sm'
						onClick={() => {
							window.open('https://www.google.com/maps/dir/?api=1&destination=Kyiv,Ukraine')
						}}
					>
						<Navigation2 />
						Прокласти маршрут на карті
					</motion.button>
				</motion.div>
				<motion.div
					initial={reduce ? false : { opacity: 0, scale: motionTokens.scale.subtle }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
					className='w-full h-100 md:w-[60%] md:h-104 mt-4 md:mt-0'
				>
					<iframe
						src='https://www.google.com/maps?q=Kyiv,Ukraine&output=embed'
						className='w-full h-full rounded-md border-0'
						loading='lazy'
						allowFullScreen
						referrerPolicy='no-referrer-when-downgrade'
					/>
				</motion.div>
			</section>
		</>

	)
}

export default WhereWeAre
