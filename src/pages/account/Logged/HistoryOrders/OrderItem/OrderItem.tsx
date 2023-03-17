import { memo, useState } from 'react'

import { Divider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { HistoryOrder } from 'types/history-order'
import OrderBottom from './OrderBottom/OrderBottom'
import OrderDescription from './OrderDescription/OrderDescription'
import styles from './OrderItem.module.scss'
import OrderTop from './OrderTop/OrderTop'

interface Props {
  item: HistoryOrder
}

const OrderItem = ({ item }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.order}>
      <OrderTop item={item} isOpen={isOpen} setOpen={setOpen} />
      <Divider marginTop='4' marginBottom='4' />
      <OrderBottom item={item} />
      <AnimatePresence>
        {isOpen && (
          <>
            <Divider marginTop='3' marginBottom='3' />
            <OrderDescription products={item.order} />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default memo(OrderItem)
