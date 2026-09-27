'use client'
import { Clock, MapPin, Navigation2, Phone } from 'lucide-react'

const WhereWeAre = () => {
	return (
		<>
			<div className='container' id='whereWeAre'>
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
			<section className='container mt-3 md:flex md:gap-4 md:mt-10'>
				<div className=' rounded-sm flex flex-col gap-4 md:w-[40%]'>
					<div className='bg-[#f9ebe7] p-4 flex gap-4'>
						<div className='bg-primary-dark p-3 rounded-md size-12 flex items-center justify-center'>
							<MapPin color='#fff' strokeWidth={2} size={25} />
						</div>
						<div>
							<h2 className='font-manrope font-semibold text-[17px] text-neutral'>Адреса у Києві</h2>
							<p className='text-tertiary'>вул. Велика Васильківська, 42</p>
							<p className='font-semibold text-primary-dark text-[14px] mt-1'>
								ст. м. «Площа Українських Героїв» (2 хв
								пішки)
							</p>
						</div>
					</div>
					<div className='bg-[#f9ebe7] p-4 flex gap-4'>
						<div className='bg-[#864e2d] p-3 rounded-md size-12 flex items-center justify-center'>
							<Clock color='#fff' strokeWidth={2} size={25} />
						</div>
						<div>
							<h2 className='font-manrope font-semibold text-[17px] text-neutral'>Графік роботи</h2>
							<p className='text-neutral font-semibold text-[18px]'>Щодня: 10:00 — 22:00</p>
							<p className='text-tertiary text-[14px]'>
								Без вихідних та перерв на обід. Гриль
								смажить до 21:45.
							</p>
						</div>
					</div>
					<div className='bg-[#f9ebe7] p-4 flex gap-4'>
						<div className='bg-[#8f4e00] p-3 rounded-md size-12 flex items-center justify-center'>
							<Phone color='#fff' strokeWidth={2} size={25} />
						</div>
						<div>
							<h2 className='font-manrope font-semibold text-[17px] text-neutral'>Швидке передзамовлення</h2>
							<a className='text-primary-dark text-[20px] font-lora' href='tel:+380678901234'>+380 (67) 890-12-34</a>
							<p className='text-[#59413A] text-[14px]'>
								Телефонуйте за 10 хв до приходу —
								заберете без черги!
							</p>
						</div>
					</div>
					<button className='font-manrope bg-neutral text-white p-3 font-semibold flex justify-center gap-2 w-full rounded-sm' onClick={() => {
						window.open('https://www.google.com/maps/dir/?api=1&destination=Kyiv,Ukraine')
					}}>
						<Navigation2 />
						Прокласти маршрут на карті
					</button>
				</div>
				<div className='w-full h-100 md:w-[60%] md:h-104'>
					<iframe
						src='https://www.google.com/maps?q=Kyiv,Ukraine&output=embed'
						className='w-full h-full rounded-md border-0'
						loading='lazy'
						allowFullScreen
						referrerPolicy='no-referrer-when-downgrade'
					/>
				</div>
			</section>
		</>

	)
}

export default WhereWeAre