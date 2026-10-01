'use client'

import { motionTokens, springs } from '@/shared/lib/motion-tokens'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { Product } from './types'

const ProductsList = ({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return (
      <div className='container flex justify-center py-12'>
        <p className='text-tertiary'>Товари не знайдено</p>
      </div>
    )
  }

  return (
    <motion.section
      layout
      className='container flex flex-col items-center mt-4 md:grid md:grid-cols-4 gap-3 lg:mt-6'
    >
      <AnimatePresence mode='popLayout'>
        {products.map((p) => (
          <motion.div
            layout
            key={p.id}
            initial={{ opacity: 0, y: motionTokens.distance.md, scale: motionTokens.scale.subtle }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: motionTokens.scale.subtle }}
            transition={springs.gentle}
            whileHover={{ y: -4 }}
            className='w-full max-w-[358px] mt-1 mb-4 bg-white rounded-xl md:max-w-[392px] lg:h-full lg:flex lg:flex-col lg:justify-between px-2 pb-2'
          >
            {p.image_url && (
              <div className='relative w-full h-[268px] md:h-[208px]'>
                <Image
                  src={p.image_url}
                  alt={p.name}
                  fill
                  className='rounded-xl object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                />
              </div>
            )}

            <h2 className='text-primary-dark text-[13px] font-semibold font-manrope'>
              {p.category}
              {p.weight !== null && (
                <span>{' ' + p.weight} г</span>
              )}
            </h2>

            <h1 className='text-2xl font-lora text-neutral font-bold'>{p.name}</h1>

            <p className='text-tertiary font-manrope text-[14px] leading-[1.6]'>
              {p.description}
            </p>

            <span className='flex justify-between my-4 text-primary-dark font-semibold'>
              Порція
              <p className='font-bold font-manrope text-2xl text-primary'>
                {p.price} ₴
              </p>
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.section>
  )
}

export default ProductsList