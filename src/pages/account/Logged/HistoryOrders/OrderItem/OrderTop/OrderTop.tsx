import { HistoryOrder } from 'types/history-order'
import { IoIosArrowDown } from 'react-icons/io'
import clsx from 'clsx'
import { formatCurrency } from 'utils/formatCurrency'
import { memo } from 'react'
import styles from './OrderTop.module.scss'

interface Props {
  item: HistoryOrder
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const OrderTop = ({ item, isOpen, setOpen }: Props) => {
  const data = new Intl.DateTimeFormat('uk-UA').format(
    new Date(Number(item.id))
  )

  return (
    <div className={styles.top}>
      <div className={styles.orderNumber}>
        <span className={styles.title}>Замовлення</span>
        <p>
          №{item.id} <span>{data}</span>
        </p>
      </div>
      <div>
        <span className={styles.title}>Сума замовлення</span>
        <p>{formatCurrency(item.total)}</p>
      </div>
      <div>
        <span className={styles.title}>Статус</span>
        <p>Виконаний</p>
      </div>
      <div>
        <span className={styles.title}>Оплачено</span>
        <p>{item.details.payment}</p>
      </div>
      <button onClick={() => setOpen(!isOpen)}>
        <IoIosArrowDown
          size='2rem'
          color='FF7010'
          className={clsx(styles.icon, {
            [styles.active]: isOpen
          })}
        />
      </button>
    </div>
  )
}

export default memo(OrderTop)
