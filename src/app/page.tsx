import Feutures from '@/widgets/Feutures/feutures'
import { Header } from '@/widgets/header'
import Hero from '@/widgets/Hero/heroSection'
import ProductSort from '@/widgets/Products/productSort'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSort />
      <Feutures />
    </>
  )
}
