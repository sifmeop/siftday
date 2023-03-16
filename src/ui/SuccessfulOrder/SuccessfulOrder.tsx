import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'

import SuccessOrder from 'assets/image/order.jpg'
import styles from './SuccessfulOrder.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  cancelRef: React.MutableRefObject<null>
}

const SuccessfulOrder = ({ isOpen, onClose, cancelRef }: Props) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Замовлення прийняте
          </AlertDialogHeader>

          <AlertDialogBody>
            <img src={SuccessOrder} alt='' className={styles.image} />
            <h1 className={styles.title}>Дякую за замовлення!</h1>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme='orange' ref={cancelRef} onClick={onClose}>
              Закрити
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default SuccessfulOrder
