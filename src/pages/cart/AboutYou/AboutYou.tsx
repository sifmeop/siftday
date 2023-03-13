import { FormLabel, Input } from '@chakra-ui/react'

import { UseFormRegister } from 'react-hook-form'
import { FormValues } from 'types/form-values.interface'
import styles from './AboutYou.module.scss'

interface Props {
  register: UseFormRegister<FormValues>
}

const AboutYou = ({ register }: Props) => {
  return (
    <section>
      <h1 className='cartTitle'>Про вас</h1>
      <div className={styles.aboutYou}>
        <div>
          <FormLabel className='cartLabel' htmlFor='name'>
            Ім'я*
          </FormLabel>
          <Input
            id='name'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='Євген'
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='phone'>
            Номер телефону*
          </FormLabel>
          <Input
            id='phone'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='+380'
            {...register('phone', { required: true })}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='email'>
            Почта
          </FormLabel>
          <Input
            id='email'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='mail@gmail.com'
            {...register('email')}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutYou
