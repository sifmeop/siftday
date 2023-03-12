import { cartActions, ProductCart } from 'store/slices/cartSlice'

import { Image } from '@chakra-ui/react'
import { useActionCreators } from 'hooks/useActionCreators'
import { memo } from 'react'
import { MdDelete } from 'react-icons/md'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './CartProduct.module.scss'

interface Props {
  item: ProductCart
}

const CartProduct = ({ item }: Props) => {
  const actions = useActionCreators(cartActions)

  const removeFromCart = () => {
    actions.removeProduct({ id: item.id })
  }

  const addQuantity = () => {
    actions.incrementQuantity({ id: item.id })
  }

  const removeQuantity = () => {
    actions.decrementQuantity({ id: item.id })
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.remove} onClick={removeFromCart}>
        <MdDelete size='1.2rem' color='#FF7010' />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={`${DB_URL}/${item.product.image}`}
          alt={item.product.title}
          loading='lazy'
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{item.product.title}</h1>
        {item.dough && (
          <p className={styles.pizzaSelection}>
            {item.dough}, {item.size}
          </p>
        )}
        <div className={styles.bottom}>
          <div className={styles.quantityWrapper}>
            <span className={styles.quantity} onClick={removeQuantity}>
              -
            </span>
            <span className={styles.quantity}>{item.quantity}</span>
            <span className={styles.quantity} onClick={addQuantity}>
              +
            </span>
          </div>
          <h2 className={styles.price}>
            {formatCurrency(item.quantity * item.product.price)}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default memo(CartProduct)
