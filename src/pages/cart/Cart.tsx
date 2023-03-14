import { Divider } from '@chakra-ui/react'
import CartProduct from 'components/CartProduct/CartProduct'
import { useAppSelector } from 'hooks/useRedux'
import { useForm } from 'react-hook-form'
import { FormValues } from 'types/form-values.interface'
import AboutYou from './AboutYou/AboutYou'
import styles from './Cart.module.scss'
import Commentary from './Commentary/Commentary'
import DeliveryType from './DeliveryType/DeliveryType'
import Payment from './Payment/Payment'
import Total from './Total/Total'

const Cart = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>()

  const cart = useAppSelector((state) => state.cart.cart)

  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <div className={styles.cartContainer}>
      {cart.length ? (
        cart.map((item) => <CartProduct key={item.id} item={item} />)
      ) : (
        <h1>Замовлень немає</h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AboutYou register={register} errors={errors} />
        <Divider marginTop='5' marginBottom='5' />
        <DeliveryType register={register} control={control} errors={errors} />
        <Divider marginTop='5' marginBottom='5' />
        <Payment control={control} errors={errors} />
        <Divider marginTop='5' marginBottom='5' />
        <Commentary register={register} />
        <Divider marginTop='5' marginBottom='5' />
        <Total register={register} />
      </form>
    </div>
  )
}

export default Cart
