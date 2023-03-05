import { Drink } from 'types/drink.interface'
import { Pizza } from 'types/pizza.interface'
import { Sauce } from 'types/sauce.interface'
import Button from 'ui/Button/Button'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './ProductCard.module.scss'

interface Props {
  product: Pizza | Drink | Sauce
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`${DB_URL}/${product.image}`}
          alt={product.title}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
        {product.ingredients && (
          <p className={styles.ingredients}>{product.ingredients}</p>
        )}
        <div className={styles.bottom}>
          <Button label='Вибрати' />
          <span className={styles.price}>{formatCurrency(product.price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
