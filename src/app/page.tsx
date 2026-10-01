import Feutures from '@/widgets/Feutures/feutures'
import Hero from '@/widgets/Hero/heroSection'
import ProductSort from '@/widgets/Products/productSort'
import WhereWeAre from '@/widgets/WhereWeAre/WhereWeAre'


export default async function Home() {

  return (
    <>
      <Hero />
      <ProductSort />
      <Feutures />
      <WhereWeAre />
      {console.log()}
    </>
  )
}
