import { Link } from 'react-scroll'
import { products } from 'utils/products'
import styles from './Categories.module.scss'

const Categories = () => {
  return (
    <div className={styles.categories}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={product.type}
          spy={true}
          smooth={true}
          duration={500}
          className={styles.category}>
          <div className={styles.icon}>
            <product.icon />
          </div>
          <h1 className={styles.title}>{product.category}</h1>
        </Link>
      ))}
    </div>
  )
}

export default Categories
