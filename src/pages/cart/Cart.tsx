import { Divider, useDisclosure } from '@chakra-ui/react'
import { ref, set } from '@firebase/database'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'

import CartProduct from 'components/CartProduct/CartProduct'
import { useAuth } from 'hooks/useAuth'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { cartActions } from 'store/slices/cartSlice'
import { FormValues } from 'types/form-values.interface'
import Button from 'ui/Button/Button'
import SuccessfulOrder from 'ui/SuccessfulOrder/SuccessfulOrder'
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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const afterEndOrder = () => {
    reset()
    dispatch(cartActions.clearCart())
    onOpen()
  }

  const onSubmit = async (data: FormValues) => {
    console.log(data)
    if (!auth.currentUser) {
      afterEndOrder()
      return
    }

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
              size: item.size ?? null,
              ingredients:
                item.ingredients
                  ?.map((ingredient) => ingredient.title)
                  .join(', ') ?? null
            },
            quantity: item.quantity
          }))
        },
        total: totalPrice()
      }
      await set(reference, result).then(() => {
        afterEndOrder()
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className={styles.cartContainer}>
        {cart.length ? (
          <>
            <h1 className={styles.title}>Ваше замовлення</h1>
            <Button
              label='Очистити'
              style={{ display: 'block', margin: '0 0 1.5rem auto' }}
              onClick={() => dispatch(cartActions.clearCart())}
            />
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
          <Total total={total} totalPrice={totalPrice} />
        </form>
      </div>
      <SuccessfulOrder
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
      />
    </>
  )
}

export default Cart
