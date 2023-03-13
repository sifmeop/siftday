import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast
} from '@chakra-ui/react'
import { memo, useState } from 'react'
import { Dough, Product, Size } from 'types/product.interface'

import { useActionCreators } from 'hooks/useActionCreators'
import { useAppSelector } from 'hooks/useRedux'
import { cartActions } from 'store/slices/cartSlice'
import { ingredientActions } from 'store/slices/ingredientSlice'
import Button from 'ui/Button/Button'
import Message from 'ui/Message/Message'
import Switch from 'ui/Switch/Switch'
import { DB_URL } from 'utils/constants'
import { formatCurrency } from 'utils/formatCurrency'
import { pizzaPrice } from 'utils/pizzaPrice'
import AddIngredients from './AddIngredients/AddIngredients'
import styles from './ProductModal.module.scss'

interface Props {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
  const [dough, setDough] = useState<Dough>('Традиційне')
  const [size, setSize] = useState<Size>('30 см')
  const ingredients = useAppSelector((state) => state.ingredients.ingredients)
  const actionsCart = useActionCreators(cartActions)
  const actionsIngredient = useActionCreators(ingredientActions)

  // useEffect(() => {
  // console.log(ingredients)
  // }, [ingredients])

  const toast = useToast()

  const addToCart = () => {
    actionsCart.addProduct({
      product: { ...product, price: pizzaPrice(size, product.price) },
      dough,
      size
    })

    toast.closeAll()
    toast({
      position: 'top-right',
      duration: 500,
      render: () => <Message />
    })

    onClose()

    if (ingredients.length) {
      actionsIngredient.clearIngredients()
    }
  }

  const handleOnCloseComplete = () => {
    setDough('Традиційне')
    setSize('30 см')
    if (ingredients.length) {
      actionsIngredient.clearIngredients()
    }
  }

  return (
    <Modal
      motionPreset='slideInRight'
      size='5xl'
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={handleOnCloseComplete}>
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
              loading='lazy'
            />
          </div>
          <section className={styles.sectionInfo}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>
            <Switch
              selection={dough}
              labels={['Традиційне', 'Тонке']}
              // @ts-ignore
              setSelection={setDough}
            />
            <Switch
              selection={size}
              labels={['20 см', '30 см', '40 см']}
              // @ts-ignore
              setSelection={setSize}
            />
            <AddIngredients />
          </section>
        </ModalBody>
        <ModalFooter className={styles.modalFooter}>
          <div className={styles.total}>
            Разом: {formatCurrency(pizzaPrice(size, product.price))}
          </div>
          <Button label='Додати' onClick={addToCart} padding='2.5rem' />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(ProductModal)
