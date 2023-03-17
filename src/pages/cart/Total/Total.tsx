import { memo } from 'react'
import Button from 'ui/Button/Button'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Total.module.scss'

interface Props {
  total: number
  totalPrice: () => number
}

const Total = ({ total, totalPrice }: Props) => {
  return total > 0 ? (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.total}>Разом: {formatCurrency(totalPrice())}</h2>
        <span className={styles.description}>
          *Доставка {formatCurrency(50)}
          <br />
          *Безкоштовна доставка при замовленні від 400 грн
        </span>
      </div>
      {total > 0 && <Button label='Оформити замовлення' />}
    </section>
  ) : null
}

export default memo(Total)
