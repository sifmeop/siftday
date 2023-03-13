import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Control, Controller, UseFormRegister } from 'react-hook-form'

import { FormValues } from 'types/form-values.interface'

interface Props {
  register: UseFormRegister<FormValues>
  control: Control<FormValues, any>
}

const Payment = ({ register, control }: Props) => {
  return (
    <section>
      <h1 className='cartTitle'>Оплата</h1>
      <Controller
        name='delivery'
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <Stack spacing={6} direction='row'>
              <Radio colorScheme='orange' value='cash'>
                Готівкою
              </Radio>
              <Radio colorScheme='orange' value='card'>
                Картою
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />
    </section>
  )
}

export default Payment
