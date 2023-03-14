import { FormLabel, Input } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FormValues } from 'types/form-values.interface'
import styles from './AboutYou.module.scss'

interface Props {
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
}

const AboutYou = ({ register, errors }: Props) => {
  return (
    <section>
      <h1 className='cartTitle'>Про вас</h1>
      <div className={styles.aboutYou}>
        <div>
          <FormLabel className='cartLabel' htmlFor='name'>
            Ім'я*
          </FormLabel>
          {errors.name && (
            <span className='text-red'>Введіть, будь ласка, ваше ім'я</span>
          )}
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
          {errors.phone && (
            <span className='text-red'>Невірний номер телефону</span>
          )}
          <Input
            id='phone'
            type='tel'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='+380'
            {...register('phone', {
              required: 'Required',
              pattern: {
                value:
                  /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/g,
                message: 'Невірний номер телефону'
              }
            })}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='email'>
            Почта
          </FormLabel>
          {errors.email && (
            <span className='text-red'>Невірна адреса пошти</span>
          )}
          <Input
            id='email'
            size='lg'
            type='email'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='mail@gmail.com'
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Невірна адреса пошти'
              }
            })}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutYou
