import {
  Divider,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'

import { useAppSelector } from 'hooks/useRedux'
import { useState } from 'react'
import Button from 'ui/Button/Button'
import Switch from 'ui/Switch/Switch'
import { formatCurrency } from 'utils/formatCurrency'
import styles from './Cart.module.scss'

type Label = 'Доставка' | 'Самовивіз'

const Cart = () => {
  const total = useAppSelector((state) => state.cart.total)
  const formattedAmount = formatCurrency(total)

  const [selection, setSelection] = useState<Label>('Доставка')

  return (
    <div className={styles.cartContainer}>
      {/*  */}
      <form>
        <section>
          <h1 className={styles.title}>Про вас</h1>
          <div className={styles.sectionAboutYou}>
            <div>
              <FormLabel className={styles.label} htmlFor='name'>
                Ім'я*
              </FormLabel>
              <Input
                id='name'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='Євген'
              />
            </div>
            <div>
              <FormLabel className={styles.label} htmlFor='phone'>
                Номер телефону*
              </FormLabel>
              <Input
                id='phone'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='+380'
              />
            </div>
            <div>
              <FormLabel className={styles.label} htmlFor='email'>
                Почта
              </FormLabel>
              <Input
                id='email'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='mail@gmail.com'
              />
            </div>
          </div>
        </section>
        <Divider marginTop='5' marginBottom='5' />
        <section>
          <div className={styles.deliveryType}>
            <h1 className={styles.title}>Доставка</h1>
            <Switch
              labels={['Доставка', 'Самовивіз']}
              selection={selection}
              // @ts-ignore
              setSelection={setSelection}
            />
          </div>
          <FormLabel className={styles.label} htmlFor='email'>
            Вулиця*
          </FormLabel>
          <Input
            id='email'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='Пушкіна'
          />
          <div className={styles.address}>
            <div>
              <FormLabel className={styles.label} htmlFor='house'>
                Дім
              </FormLabel>
              <Input
                id='house'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='1а'
              />
            </div>
            <div>
              <FormLabel className={styles.label} htmlFor='entrance'>
                Під'їзд
              </FormLabel>
              <Input
                id='entrance'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='1'
              />
            </div>
            <div>
              <FormLabel className={styles.label} htmlFor='floor'>
                Поверх
              </FormLabel>
              <Input
                id='floor'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='2'
              />
            </div>
            <div>
              <FormLabel className={styles.label} htmlFor='apartment'>
                Квартира
              </FormLabel>
              <Input
                id='apartment'
                size='lg'
                focusBorderColor='#FF7010'
                backgroundColor='white'
                placeholder='3'
              />
            </div>
          </div>
        </section>
        <Divider marginTop='5' marginBottom='5' />
        <section>
          <h1 className={styles.title}>Оплата</h1>
          {/* <RadioGroup onChange={setValue} value={value}> */}
          <RadioGroup defaultValue='cash'>
            <Stack spacing={6} direction='row'>
              <Radio colorScheme='orange' value='cash'>
                Готівкою
              </Radio>
              <Radio colorScheme='orange' value='card'>
                Картою
              </Radio>
            </Stack>
          </RadioGroup>
        </section>
        <Divider marginTop='5' marginBottom='5' />
        <section>
          <h1 className={styles.title}>Коментар</h1>
          <Textarea
            resize='none'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='Чи є уточнення?'
            height='40'
          />
        </section>
        <Divider marginTop='5' marginBottom='5' />
        <section className={styles.totalSection}>
          <h2 className={styles.totalPrice}>Разом: {formattedAmount}</h2>
          <Button label='Оформити замовлення' />
        </section>
      </form>
    </div>
  )
}

export default Cart
