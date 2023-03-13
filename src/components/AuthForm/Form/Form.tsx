import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { useActionCreators } from 'hooks/useActionCreators'
import { useAuth } from 'hooks/useAuth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect } from 'react-router-dom'
import { userActions } from 'store/slices/userSlice'
import Button from 'ui/Button/Button'

interface Props {
  type: 'Login' | 'Register'
}

interface FormValues {
  name: string
  email: string
  password: string
}

const Form = ({ type }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const { register, handleSubmit } = useForm()
  const auth = useAuth().auth
  const actions = useActionCreators(userActions)

  const onSubmit = async (data: FormValues): Promise<void> => {
    switch (type) {
      case 'Login':
        try {
          await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
          ).then(async ({ user }) => {
            actions.setUser({
              id: user.uid,
              email: user.email,
              name: user.displayName
            })
          })
          // message.success(tAuthForm('successful-register'))
          redirect('/account')
        } catch (e) {
          console.log(e)
          // message.error(tAuthForm('failed-login'))
        }
        break
      case 'Register':
        try {
          await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          ).then(({ user }) => {
            updateProfile(user, {
              displayName: data.name
            })
            console.log(user)
            actions.setUser({
              id: user.uid,
              email: user.email,
              name: user.displayName
            })
          })
          // message.success(tAuthForm('successful-register'))
          redirect('/account')
        } catch (e) {
          console.log(e)
          // message.error(tAuthForm('failed-register'))
        }
        break
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {type === 'Register' && (
        <>
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
        </>
      )}
      <FormLabel className='cartLabel' htmlFor='email'>
        Почта*
      </FormLabel>
      <Input
        id='email'
        size='lg'
        focusBorderColor='#FF7010'
        backgroundColor='white'
        placeholder='mail@gmail.com'
        {...register('email', { required: true })}
      />
      <FormLabel className='cartLabel' htmlFor='email'>
        Пароль*
      </FormLabel>
      <InputGroup size='lg' backgroundColor='white'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          focusBorderColor='#FF7010'
          placeholder='12345678'
          {...register('password', { required: true })}
        />
        <InputRightElement width='4.5rem'>
          <div
            className='cursor-pointer'
            onClick={() => setShow((prev) => !prev)}>
            {show ? <BsEyeSlash className='cursor-pointer' /> : <BsEye />}
          </div>
        </InputRightElement>
      </InputGroup>
      <Button label={type === 'Register' ? 'Зареєструватись' : 'Увійти'} />
    </form>
  )
}

export default Form
