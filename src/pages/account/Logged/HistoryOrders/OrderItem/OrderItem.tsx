import { Avatar, AvatarGroup, Divider } from '@chakra-ui/react'

import { HistoryOrder } from 'types/history-order'
import { DB_URL } from 'utils/constants'
import styles from './OrderItem.module.scss'

interface Props {
  item: HistoryOrder
}

const OrderItem = ({ item }: Props) => {
  const data = new Intl.DateTimeFormat('uk-UA').format(
    new Date(Number(item.id))
  )

  return (
    <div className={styles.order}>
      <div>
        <div>
          <span>Замовлення</span>
          <p>
            №{item.id} <span>{data}</span>
          </p>
        </div>
        <div>
          <span>Сума замовлення</span>
          <p>{item.total}</p>
        </div>
        <div>
          <span>Оплачено</span>
          <p>{item.details.payment}</p>
        </div>
      </div>
      <Divider />
      <div>
        <ul>
          <li>
            <span>вулиця:</span> {item.details.street}
          </li>
          {item.details.house && (
            <li>
              <span>дім:</span> {item.details.house}
            </li>
          )}
          {item.details.entrance && (
            <li>
              <span>під'їзд:</span> {item.details.entrance}
            </li>
          )}
          {item.details.level && (
            <li>
              <span>поверх:</span> {item.details.level}
            </li>
          )}
          {item.details.apartment && (
            <li>
              <span>квартира:</span> {item.details.apartment}
            </li>
          )}
        </ul>
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
    </div>
  )
}

export default OrderItem
