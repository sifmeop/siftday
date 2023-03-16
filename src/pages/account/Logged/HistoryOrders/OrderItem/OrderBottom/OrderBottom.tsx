import { Avatar, AvatarGroup } from '@chakra-ui/react'

import { memo } from 'react'
import { HistoryOrder } from 'types/history-order'
import { DB_URL } from 'utils/constants'
import { orderDetailsShort } from 'utils/orderDetailsShort'
import styles from './OrderBottom.module.scss'

interface Props {
  item: HistoryOrder
}

const OrderBottom = ({ item }: Props) => {
  return (
    <div className={styles.bottom}>
      {orderDetailsShort(item.details)}
      <div>
        <AvatarGroup>
          {item.order.map((product) => (
            <Avatar
              key={product.id}
              name={product.product.title}
              src={`${DB_URL}/${product.product.image}`}
            />
          ))}
        </AvatarGroup>
      </div>
    </div>
  )
}

export default memo(OrderBottom)
