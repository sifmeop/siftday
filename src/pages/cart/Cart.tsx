import { Divider } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormValues } from 'types/form-values.interface'
import { TypeDelivery } from 'types/product.interface'
import AboutYou from './AboutYou/AboutYou'
import styles from './Cart.module.scss'
import Commentary from './Commentary/Commentary'
import DeliveryType from './DeliveryType/DeliveryType'
import Payment from './Payment/Payment'
import Total from './Total/Total'

const Cart = () => {
  const [selection, setSelection] = useState<TypeDelivery>('Доставка')

  const { register, handleSubmit, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <div className={styles.cartContainer}>
      {/*  */}

      {/*  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AboutYou register={register} />
        <Divider marginTop='5' marginBottom='5' />
        <DeliveryType
          register={register}
          control={control}
          selection={selection}
          // @ts-ignore
          setSelection={setSelection}
        />
        <Divider marginTop='5' marginBottom='5' />
        <Payment register={register} control={control} />
        <Divider marginTop='5' marginBottom='5' />
        <Commentary register={register} />
        <Divider marginTop='5' marginBottom='5' />
        <Total />
      </form>
    </div>
  )
}

export default Cart
