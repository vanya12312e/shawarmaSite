'use client'

import { motionTokens, springs } from '@/shared/lib/motion-tokens'
import { PhoneCall } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const reduce = useReducedMotion()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ name: 'Меню', href: '#menu' },
		{ name: 'Про нас', href: '#about' },
		{ name: 'Де ми', href: '#whereWeAre' },
		{ name: 'Контакти', href: 'tel:+380678901234' },
	]

	return (
		<motion.header
			initial={reduce ? false : { y: -motionTokens.distance.sm, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}
			className={`
        sticky top-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled
					? 'bg-[#fff9f7]/80 py-2.5 backdrop-blur-md shadow-md shadow-black/5'
					: 'bg-[#fff9f7] py-5 shadow-md shadow-black/5'
				}
      `}
		>
			<section className='container mx-auto flex items-center justify-between'>
				<div>
					<h1
						className={`
              font-lora text-2xl font-bold uppercase tracking-tight text-neutral
              transition-all duration-300 ease-in-out
              sm:text-3xl
            `}
					>
						вогонь & лаваш
					</h1>

					<p
						className={`
              overflow-hidden font-manrope text-xl font-bold text-primary-dark
              transition-all duration-300 ease-in-out
              ${isScrolled
								? 'max-h-0 -translate-y-1 opacity-0'
								: 'max-h-10 translate-y-0 opacity-100'
							}
            `}
					>
						Крафтова шаурма
					</p>
				</div>

				<nav className='hidden gap-8 lg:flex'>
					{navLinks.map((link) => (
						<motion.span
							key={link.name}
							whileHover={reduce ? undefined : { y: -2 }}
							transition={springs.snappy}
							className='inline-block'
						>
							<Link
								href={link.href}
								className='relative font-manrope text-lg font-bold text-[#59413A] transition-colors duration-300 hover:text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100'
							>
								{link.name}
							</Link>
						</motion.span>
					))}
				</nav>

				<motion.a
					href='tel:+380678901234'
					whileHover={reduce ? undefined : { scale: motionTokens.scale.pop }}
					whileTap={reduce ? undefined : { scale: motionTokens.scale.press }}
					transition={springs.snappy}
					className='flex items-center gap-1 font-manrope text-base font-bold text-neutral transition-colors duration-300 hover:text-primary-dark sm:text-xl'
				>
					<PhoneCall className='text-primary-dark' />
					+380 (67) 890-12-34
				</motion.a>
			</section>
		</motion.header>
	)
}

export default Header
