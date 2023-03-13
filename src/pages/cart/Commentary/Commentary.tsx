import { UseFormRegister } from 'react-hook-form'

import { Textarea } from '@chakra-ui/react'
import { FormValues } from 'types/form-values.interface'

interface Props {
  register: UseFormRegister<FormValues>
}

const Commentary = ({ register }: Props) => {
  return (
    <section>
      <h1 className='cartTitle'>Коментар</h1>
      <Textarea
        resize='none'
        focusBorderColor='#FF7010'
        backgroundColor='white'
        placeholder='Чи є уточнення?'
        height='40'
        {...register('comment')}
      />
    </section>
  )
}

export default Commentary
