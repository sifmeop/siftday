import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

import { memo } from 'react'
import { Product } from 'types/product.interface'
import Button from 'ui/Button/Button'
import Switch from 'ui/Switch/Switch'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './ProductModal.module.scss'

interface Props {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  console.log(product)

  const addToCart = () => {
    onClose()
  }

  return (
    <Modal
      motionPreset='slideInRight'
      size='4xl'
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent className='relative'>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.modalBody}>
          {product.note && <span className={styles.note}>{product.note}</span>}
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={`${DB_URL}/${product.image}`}
              alt={product.title}
            />
          </div>
          <section className={styles.sectionInfo}>
            <h1 className={styles.title}>{product.title}</h1>
            <Switch labels={['Традиційне', 'Тонке']} />
            <Switch labels={['20 см', '28 см', '33 см']} />
          </section>
        </ModalBody>
        <ModalFooter className={styles.modalFooter}>
          <div className={styles.total}>
            Разом: {formatCurrency(product.price)}
          </div>
          <Button label='Додати' onClick={addToCart} padding='2.5rem' />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(ProductModal)
