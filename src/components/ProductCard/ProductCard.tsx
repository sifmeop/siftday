import { Image, Tooltip, useDisclosure } from '@chakra-ui/react'

import { memo } from 'react'
import { Product } from 'types/product.interface'
import Button from 'ui/Button/Button'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './ProductCard.module.scss'
import ProductModal from './ProductModal/ProductModal'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className={styles.card}>
        {product.note && <span className={styles.note}>{product.note}</span>}
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={`${DB_URL}/${product.image}`}
            alt={product.title}
          />
          <img />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          {product.description && (
            <Tooltip placement='top' hasArrow label={product.description}>
              <div className='inline-block'>
                <p className={styles.description}>{product.description}</p>
              </div>
            </Tooltip>
          )}
          <div className={styles.bottom}>
            <Button label='Вибрати' onClick={onOpen} />
            <span className={styles.price}>
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>
      </div>
      <ProductModal product={product} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default memo(ProductCard)
