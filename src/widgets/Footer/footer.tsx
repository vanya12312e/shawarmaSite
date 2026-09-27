'use client'

import { motionTokens } from '@/shared/lib/motion-tokens'
import { motion, useReducedMotion } from 'motion/react'
import { Clock, Flame, MapPin, Phone } from 'lucide-react'

const columns = [
	{
		key: 'brand',
		content: (
			<div className='space-y-4'>
				<div className='flex items-center gap-2.5'>
					<div className='flex size-9 items-center justify-center rounded-xl bg-primary-dark text-white shadow-sm shadow-[#d95327]/20'>
						<Flame className='size-5' />
					</div>

					<span className='font-serif text-xl font-bold tracking-tight'>
						ВОГОНЬ & ЛАВАШ
					</span>
				</div>

				<p className='max-w-sm text-sm font-medium leading-relaxed text-[#6e5449]'>
					Київська крафтова шаурма зі справжнім м’ясним характером,
					свіжим лавашем та авторськими пряними соусами.
				</p>

				<span className='inline-block text-xs font-bold uppercase tracking-wider text-primary-dark'>
					#вогоньлаваш
				</span>
			</div>
		),
	},
	{
		key: 'location',
		content: (
			<address className='space-y-3 not-italic'>
				<div className='flex items-center gap-2'>
					<MapPin className='size-4 text-primary-dark' />

					<h2 className='text-sm font-bold uppercase tracking-wider'>
						Локація
					</h2>
				</div>

				<div className='space-y-1 text-sm'>
					<p className='font-semibold'>
						м. Київ
					</p>

					<p className='font-medium leading-snug text-[#6e5449]'>
						вул. Велика Васильківська, 42
					</p>

					<p className='text-xs text-[#a07f71]'>
						ст. м. «Площа Українських Героїв», 2 хв пішки
					</p>
				</div>
			</address>
		),
	},
	{
		key: 'hours',
		content: (
			<div className='space-y-3'>
				<div className='flex items-center gap-2'>
					<Clock className='size-4 text-primary-dark' />

					<h2 className='text-sm font-bold uppercase tracking-wider'>
						Графік роботи
					</h2>
				</div>

				<div className='space-y-1'>
					<p className='text-sm font-semibold'>
						Щодня
					</p>

					<p className='font-mono text-lg font-bold tracking-tight text-primary-dark'>
						10:00 — 22:00
					</p>

					<p className='text-xs text-[#a07f71]'>
						Гарячий гриль смажить до 21:45
					</p>
				</div>
			</div>
		),
	},
	{
		key: 'contacts',
		content: (
			<div className='space-y-3'>
				<div className='flex items-center gap-2'>
					<Phone className='size-4 text-primary-dark' />

					<h2 className='text-sm font-bold uppercase tracking-wider'>
						Зв’язок
					</h2>
				</div>

				<nav aria-label='Контакти'>
					<ul className='space-y-2.5 text-sm'>
						<li>
							<a
								href='tel:+380678901234'
								className='flex items-center gap-2 font-bold transition-colors hover:primary-dark/80'
							>
								<Phone className='size-3.5 text-primary-dark' />
								<span>+380 (67) 890-12-34</span>
							</a>
						</li>

						<li>
							<a
								href='https://instagram.com/vogon.lavash'
								target='_blank'
								rel='noreferrer noopener'
								className='font-medium text-[#6e5449] transition-colors hover:primary-dark/80'
							>
								@vogon.lavash
							</a>
						</li>
					</ul>
				</nav>

				<p className='pt-1 text-xs text-[#a07f71]'>
					Самовивіз та доставка по місту
				</p>
			</div>
		),
	},
]

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const reduce = useReducedMotion()

	return (
		<footer className='w-full bg-[#fff1ec] text-[#2d1a12] border-t border-[#f3d9ce] mt-45'>
			<div className='container mx-auto px-4 py-10 lg:py-12'>
				<motion.div
					initial={reduce ? false : 'hidden'}
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.08 } },
					}}
					className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10'
				>
					{columns.map((col) => (
						<motion.div
							key={col.key}
							variants={{
								hidden: { opacity: 0, y: motionTokens.distance.md },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth },
								},
							}}
						>
							{col.content}
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Bottom */}
			<motion.div
				initial={reduce ? false : { opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: motionTokens.duration.normal }}
				className='border-t border-[#eed2c6] bg-[#fbe7df]/70'
			>
				<div className='container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-[#8c6d60] sm:flex-row'>
					<p>
						© {currentYear} ВОГОНЬ & ЛАВАШ. Усі права захищено.
					</p>

					<div className='flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium'>
						<span className='flex items-center gap-1.5'>
							<span className='size-1.5 rounded-full bg-primary-dark' />
							Свіже м’ясо з вертеля
						</span>

						<span className='flex items-center gap-1.5'>
							<span className='size-1.5 rounded-full bg-primary-dark' />
							Зроблено з душею у Києві
						</span>
					</div>
				</div>
			</motion.div>
		</footer>
	)
}

export default Footer
