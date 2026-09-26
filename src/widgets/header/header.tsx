'use client'

import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
const Header = () => {

	const navLinks = [
		{ name: 'Меню', onClick: () => { console.log('Меню') } },
		{ name: 'Про нас', onClick: () => { console.log('Про нас') } },
		{ name: 'Де ми', onClick: () => { console.log('Де ми') } },
		{ name: 'Контакти', onClick: () => { console.log('Контакти') } },
	]

	return (
		<header className='bg-[#fff9f7] py-5 px-6 flex items-center justify-between shadow-md shadow-black/5'>
			<div className='container flex items-center justify-between mx-auto'>
				<div>
					<h1 className='font-lora text-3xl text-neutral font-bold uppercase tracking-tight'>вогонь & лаваш</h1>
					<p className='font-manrope font-bold text-primary-dark text-xl'>Крафтова шаурма</p>
				</div>
				<nav className='hidden lg:flex gap-8'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							className='relative font-manrope font-bold text-lg text-[#59413A] transition-colors duration-300 hover:text-primary-dark after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100'
							onClick={link.onClick}
							href='#'
						>
							{link.name}
						</Link>
					))}
				</nav>
				<a className='font-manrope font-bold text-neutral text-xl flex items-center gap-1 hover:text-primary-dark transition-colors duration-300' href='tel:+380678901234'>
					<PhoneCall color='#a93103' />
					+380 (67) 890-12-34
				</a>
			</div>

		</header>
	)
}

export default Header
