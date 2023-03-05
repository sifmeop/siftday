import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure
} from '@chakra-ui/react'

import { useAppSelector } from 'hooks/useRedux'
import { FaShoppingCart } from 'react-icons/fa'
import Button from 'ui/Button/Button'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Cart.module.scss'

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter
            justifyContent='space-between'
            gap='0.625rem'
            borderTopWidth='1px'>
            <h1 className={styles.amount}>Разом: {formattedAmount}</h1>
            <Button label='Оформити замовлення' />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
