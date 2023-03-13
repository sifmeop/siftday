import { useAppSelector } from 'hooks/useRedux'
import Button from 'ui/Button/Button'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Total.module.scss'

interface Props {}

const Total = ({}: Props) => {
  const total = useAppSelector((state) => state.cart.total)
  const formattedAmount = formatCurrency(total)

  return (
    <section className={styles.totalSection}>
      <h2 className={styles.totalPrice}>Разом: {formattedAmount}</h2>
      <Button label='Оформити замовлення' />
    </section>
  )
}

export default Total
