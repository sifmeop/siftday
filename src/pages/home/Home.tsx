import { products } from 'utils/products'
import Categories from './Categories/Categories'
import SectionItem from './SectionItem/SectionItem'

const Home = () => {
  return (
    <>
      <Categories />
      {products.map((product) => (
        <SectionItem
          key={product.id}
          category={product.category}
          type={product.type}
        />
      ))}
    </>
  )
}

export default Home
