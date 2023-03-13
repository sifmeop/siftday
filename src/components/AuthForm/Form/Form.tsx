import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast
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
import { useNavigate } from 'react-router-dom'
import { userActions } from 'store/slices/userSlice'
import Button from 'ui/Button/Button'

interface Props {
  type: 'Login' | 'Register'
}

interface FormValues {
  name: string
  email: string
  // phone: string
  password: string
}

const Form = ({ type }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const { register, handleSubmit } = useForm()
  const auth = useAuth().auth
  const actions = useActionCreators(userActions)
  const toast = useToast()
  const navigate = useNavigate()

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
          toast({
            title: 'В аккаунт увійдено',
            position: 'top',
            status: 'success',
            isClosable: true
          })
          navigate('/account')
        } catch (e) {
          console.log(e)
          toast({
            title: 'Помилка входу',
            position: 'top',
            status: 'error',
            isClosable: true
          })
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
            actions.setUser({
              id: user.uid,
              email: user.email,
              name: user.displayName
            })
          })
          toast({
            title: 'Обліковий запис створено',
            position: 'top',
            status: 'success',
            isClosable: true
          })
          navigate('/account')
        } catch (e) {
          console.log(e)
          toast({
            title: 'Помилка реєстрації',
            position: 'top',
            status: 'error',
            isClosable: true
          })
        }
        break
    }
  }

  return (
    // @ts-ignore
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
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
      {/* {type === 'Register' && (
        <>
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
        </>
      )} */}
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
