import Image from 'next/image'

const Feutures = () => {
	return (
		<section className='w-full bg-[#fef1ed]' id='about'>
			<div className='container mx-auto lg:flex lg:gap-8 py-15'>
				<div className='relative w-full h-66 lg:w-1/2 lg:h-130'>
					<Image
						fill
						src='/room.png'
						className='rounded-xl object-cover'
						alt='room'
					/>
				</div>
				<div className='w-full lg:w-1/2 mt-5 lg:my-auto'>
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
					<div className='md:flex md:justify-between'>
						<div className='mt-4 text-tertiary font-medium'>
							<h2 className='text-primary-dark text-3xl font-semibold'>5-7 хв</h2>
							і твоя гаряча шаурма в руках
						</div>
						<div className='mt-4 text-tertiary font-medium'>
							<h2 className='text-primary-dark text-3xl font-semibold'>12+</h2>
							Прянощів у нашому маринаді
						</div>
						<div className='mt-4 text-tertiary font-medium'>
							<h2 className='text-primary-dark text-3xl font-semibold'>100%</h2>
							Чесна та відкрита кухня
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Feutures