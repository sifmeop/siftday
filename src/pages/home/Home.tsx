import { products } from 'utils/products'
import SectionItem from './SectionItem/SectionItem'

const Home = () => {
  return (
    <>
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
