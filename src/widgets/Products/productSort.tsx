'use client'
import { Reveal } from '@/shared/ui/Reveal'
import { useProductsStore } from '@/store/store'
import ProductsList from './ProductsList'
import Categories from './categories'
import { useEffect } from 'react'
import { productsApi } from './api'

const ProductSort = () => {
  const { products, setProducts, setLoading, setError, isLoading } = useProductsStore()

  useEffect(() => {
    let mounted = true

    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await productsApi.getAll()
        if (mounted) {
          setProducts(data)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load products')
        }
      }
    }

    fetchProducts()

    return () => {
      mounted = false
    }
  }, [setProducts, setLoading, setError])

  return (
    <>
      <section className='container mx-auto mt-4 lg:flex lg:justify-between'>
        <Reveal>
          <p className='text-primary-dark font-manrope font-bold text-[13px]'>Справжній смак</p>
          <h1 className='text-2xl font-bold text-neutral font-lora mt-1' id='menu'>Наше меню</h1>
          <p className='text-tertiary font-manrope text-[15px] leading-[1.6]'>
            Готуємо від душі — ситно, смачно та без
            компромісів. Вибирай свою улюблену або
            спробуй новинку!
          </p>
        </Reveal>
        <Categories />
      </section>
      {isLoading ? (
        <div className='container flex justify-center py-12'>
          <p className='text-tertiary'>Завантаження...</p>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </>
  )
}

export default ProductSort