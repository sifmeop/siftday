import { Image, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import { Product, ProductType } from 'types/product.interface'

import { useActionCreators } from 'hooks/useActionCreators'
import { memo } from 'react'
import { cartActions } from 'store/slices/cartSlice'
import Button from 'ui/Button/Button'
import Message from 'ui/Message/Message'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './ProductCard.module.scss'
import ProductModal from './ProductModal/ProductModal'

interface Props {
  product: Product
  type: ProductType
}

const ProductCard = ({ product, type }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const actions = useActionCreators(cartActions)

  const addToCart = () => {
    actions.addProduct({ product })
    toast.closeAll()
    toast({
      position: 'top-right',
      duration: 500,
      render: () => <Message />
    })
  }

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
            {type === 'pizza' ? (
              <Button label='Вибрати' onClick={onOpen} />
            ) : (
              <Button label='Додати' onClick={addToCart} />
            )}
            <span className={styles.price}>
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>
      </div>
      {type === 'pizza' && (
        <ProductModal product={product} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  )
}

export default memo(ProductCard)
