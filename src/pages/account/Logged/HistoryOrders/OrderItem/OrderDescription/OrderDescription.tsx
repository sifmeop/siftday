import { Dough, Product, Size } from 'types/product.interface'

import { DB_URL } from 'utils/constants'
import { IngredientTitle } from 'types/Ingredient.interface'
import { formatCurrency } from 'utils/formatCurrency'
import { motion } from 'framer-motion'
import { productPluralForm } from 'utils/productPluralForm'
import styles from './OrderDescription.module.scss'

interface Props {
  products: {
    id: number
    product: Product & {
      dough: Dough
      size: Size
      ingredients: IngredientTitle
    }
    quantity: number
  }[]
}

const OrderDescription = ({ products }: Props) => {
  return (
    <>
      {products.map((item) => (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          key={item.id}
          className={styles.product}>
          <div className={styles.image}>
            <img
              className='h-10 w-10'
              src={`${DB_URL}/${item.product.image}`}
              alt={item.product.title}
            />
            <h1 className={styles.title}>{item.product.title}</h1>
          </div>
          <div>
            {item.product.dough && (
              <>
                <p className='font-normal'>
                  {item.product.dough}, {item.product.size}
                </p>
                {item.product.ingredients && (
                  <div className={styles.additional}>
                    <span className='text-xs'>доп:</span>
                    <ul>
                      {item.product.ingredients
                        .split(', ')
                        .map((ingredient) => (
                          <li key={ingredient} className={styles.ingredient}>
                            {ingredient}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
          <div className={styles.quantity}>
            {productPluralForm(item.quantity)}
          </div>
          <div className={styles.price}>
            {formatCurrency(item.product.price)}
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default OrderDescription
