import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react'

import { useAppSelector } from 'hooks/useRedux'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Button from 'ui/Button/Button'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Cart.module.scss'
import CartProduct from './CartProduct/CartProduct'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cart = useAppSelector((state) => state.cart.cart)
  const total = useAppSelector((state) => state.cart.total)
  const formattedAmount = formatCurrency(total)

  return (
    <>
      <button className={styles.cart} onClick={onOpen}>
        <FaShoppingCart size='1.5rem' />
        <span>{formattedAmount}</span>
      </button>
      <Drawer size='lg' isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='3xl' padding='5'>
            Ваше замовлення
          </DrawerHeader>
          <DrawerBody>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))
            ) : (
              <h1>Замовлень немає</h1>
            )}
          </DrawerBody>
          <DrawerFooter
            justifyContent='space-between'
            gap='0.625rem'
            borderTopWidth='1px'>
            <div className={styles.amount}>Разом: {formattedAmount}</div>
            <NavLink to='/cart' onClick={onClose}>
              <Button label='Оформити замовлення' />
            </NavLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
