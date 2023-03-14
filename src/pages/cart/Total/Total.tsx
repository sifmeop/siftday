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
  const formattedAmount = formatCurrency(total)

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.promocode}>
          <Input
            size='lg'
            focusBorderColor='#FF7010'
            className={styles.input}
            placeholder='Промокод'
            {...register('promo_code')}
          />
          <div className={styles.button}>
            <IoSend size='1.125rem' className={styles.icon} />
          </div>
        </div>
        <h2 className={styles.total}>Разом: {formattedAmount}</h2>
      </div>
      <Button label='Оформити замовлення' />
    </section>
  )
}

export default Total
