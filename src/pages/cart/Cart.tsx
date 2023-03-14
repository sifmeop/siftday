import { ref, set } from '@firebase/database'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'

import { Divider } from '@chakra-ui/react'
import CartProduct from 'components/CartProduct/CartProduct'
import { useAuth } from 'hooks/useAuth'
import { useForm } from 'react-hook-form'
import { cartActions } from 'store/slices/cartSlice'
import { FormValues } from 'types/form-values.interface'
import { db } from '../../../firebase'
import AboutYou from './AboutYou/AboutYou'
import styles from './Cart.module.scss'
import Commentary from './Commentary/Commentary'
import DeliveryType from './DeliveryType/DeliveryType'
import Payment from './Payment/Payment'
import Total from './Total/Total'

const Cart = () => {
  const auth = useAuth().auth
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormValues>()

  const cart = useAppSelector((state) => state.cart.cart)
  const total = useAppSelector((state) => state.cart.total)
  const totalPrice = () => (total >= 400 ? total : total + 50)

  const onSubmit = async (data: FormValues) => {
    console.log(data)
    const id = Date.now()
    const reference = ref(db, 'orders/' + auth.currentUser!.uid + '/' + id)
    try {
      const result = {
        id,
        details: {
          ...data,
          house: data.house ?? null,
          entrance: data.entrance ?? null,
          level: data.level ?? null,
          apartment: data.apartment ?? null
        },
        order: {
          ...cart.map((item) => ({
            id: item.id,
            product: {
              ...item.product,
              dough: item.dough ?? null,
              size: item.size ?? null
            },
            quantity: item.quantity
          }))
        },
        total: totalPrice()
      }
      await set(reference, result).then(() => {
        console.log('success')
        reset()
        dispatch(cartActions.clearCart())
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.cartContainer}>
      {cart.length ? (
        <>
          <h1 className={styles.title}>Ваше замовлення</h1>
          {cart.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h1 className={styles.title}>Замовлень немає</h1>
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
        <Total register={register} total={total} totalPrice={totalPrice} />
      </form>
    </div>
  )
}

export default Cart
