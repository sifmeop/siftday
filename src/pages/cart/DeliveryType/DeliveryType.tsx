import {
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  useController,
  UseFormRegister
} from 'react-hook-form'

import { FormValues } from 'types/form-values.interface'
import { TypeDelivery } from 'types/product.interface'
import Switch from 'ui/Switch/Switch'
import styles from './DeliveryType.module.scss'

interface Props {
  register: UseFormRegister<FormValues>
  control: Control<FormValues, any>
  errors: FieldErrors<FormValues>
}

const DeliveryType = ({ register, control, errors }: Props) => {
  const [selection, setSelection] = useState<TypeDelivery>('Доставка')

  const { field } = useController({
    name: 'delivery',
    control
  })

  useEffect(() => {
    field.onChange(selection)
  }, [selection])

  return (
    <section>
      <div className={styles.deliveryType}>
        <h1 className='cartTitle'>Доставка</h1>
        <Switch
          labels={['Доставка', 'Самовивіз']}
          selection={selection}
          // @ts-ignore
          setSelection={setSelection}
        />
      </div>
      <FormLabel className='cartLabel' htmlFor='street'>
        Вулиця*
      </FormLabel>
      {errors.street && (
        <span className='text-red'>Введіть, будь ласка, назву вулиці</span>
      )}
      <Input
        id='street'
        size='lg'
        focusBorderColor='#FF7010'
        backgroundColor='white'
        placeholder='Пушкіна'
        {...register('street', { required: true, minLength: 3 })}
      />
      <div className={styles.address}>
        <div>
          <FormLabel className='cartLabel' htmlFor='house'>
            Дім
          </FormLabel>
          <Input
            id='house'
            size='lg'
            focusBorderColor='#FF7010'
            backgroundColor='white'
            placeholder='1а'
            {...register('house')}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='entrance'>
            Під'їзд
          </FormLabel>
          <Controller
            name='entrance'
            control={control}
            render={({ field: { onChange, value } }) => (
              <NumberInput
                size='lg'
                focusBorderColor='#FF7010'
                onChange={onChange}
                value={value}>
                <NumberInputField backgroundColor='white' placeholder='1' />
                <NumberInputStepper />
              </NumberInput>
            )}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='floor'>
            Поверх
          </FormLabel>
          <Controller
            name='level'
            control={control}
            render={({ field: { onChange, value } }) => (
              <NumberInput
                size='lg'
                focusBorderColor='#FF7010'
                onChange={onChange}
                value={value}>
                <NumberInputField backgroundColor='white' placeholder='2' />
                <NumberInputStepper />
              </NumberInput>
            )}
          />
        </div>
        <div>
          <FormLabel className='cartLabel' htmlFor='apartment'>
            Квартира
          </FormLabel>
          <Controller
            name='apartment'
            control={control}
            render={({ field: { onChange, value } }) => (
              <NumberInput
                size='lg'
                focusBorderColor='#FF7010'
                onChange={onChange}
                value={value}>
                <NumberInputField backgroundColor='white' placeholder='3' />
                <NumberInputStepper />
              </NumberInput>
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default DeliveryType
