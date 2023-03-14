import { Input } from '@chakra-ui/react'
import { useAppSelector } from 'hooks/useRedux'
import { UseFormRegister } from 'react-hook-form'
import { IoSend } from 'react-icons/io5'
import { FormValues } from 'types/form-values.interface'
import Button from 'ui/Button/Button'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Total.module.scss'

interface Props {
  register: UseFormRegister<FormValues>
}

const Total = ({ register }: Props) => {
  const total = useAppSelector((state) => state.cart.total)

  const totalPrice = () => (total >= 400 ? total : total + 50)

  return total > 0 ? (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.promocode}>
          <Input
            size='lg'
            focusBorderColor='#FF7010'
            className={styles.input}
            placeholder='Промокод'
            {...register('promo_code')}
          />
          <div className={styles.button}>
            <IoSend size='1.125rem' />
          </div>
        </div>
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

export default Total
