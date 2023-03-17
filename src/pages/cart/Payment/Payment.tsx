import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { memo } from 'react'
import { FormValues } from 'types/form-values.interface'

interface Props {
  control: Control<FormValues, any>
  errors: FieldErrors<FormValues>
}

const Payment = ({ control, errors }: Props) => {
  return (
    <section>
      <h1 className='cartTitle'>Оплата</h1>
      {errors.payment && (
        <span className='text-red'>Оберіть спосіб оплати</span>
      )}
      <Controller
        name='payment'
        control={control}
        rules={{ required: true }}
        // @ts-ignore
        defaultValue='Готівка'
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value} defaultValue='Готівка'>
            <Stack spacing={6} direction='row'>
              <Radio colorScheme='orange' value='Готівка'>
                Готівкою
              </Radio>
              <Radio colorScheme='orange' value='Картка'>
                Картою
              </Radio>
            </Stack>
          </RadioGroup>
        )}
      />
    </section>
  )
}

export default memo(Payment)
