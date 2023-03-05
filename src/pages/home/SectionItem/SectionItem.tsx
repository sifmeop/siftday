import ProductCard from 'components/ProductCard/ProductCard'
import { Drink } from 'types/drink.interface'
import { Pizza } from 'types/pizza.interface'
import { Sauce } from 'types/sauce.interface'
import styles from './SectionItem.module.scss'

interface Props {
  title: string
  products: Pizza[] | Drink[] | Sauce[] | undefined
}

const SectionItem = ({ title, products }: Props) => {
  return products ? (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.products}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  ) : null
}

export default SectionItem
