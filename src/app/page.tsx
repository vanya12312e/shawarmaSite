import Feutures from '@/widgets/Feutures/feutures'
import { Header } from '@/widgets/header'
import Hero from '@/widgets/Hero/heroSection'
import ProductSort from '@/widgets/Products/productSort'
import WhereWeAre from '@/widgets/WhereWeAre/WhereWeAre'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSort />
      <Feutures />
      <WhereWeAre />
    </>
  )
}
