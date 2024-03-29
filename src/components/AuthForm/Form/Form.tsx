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
import { memo, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { useActionCreators } from 'hooks/useActionCreators'
import { useAuth } from 'hooks/useAuth'
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
  password: string
}

const Form = ({ type }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
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
            user.phoneNumber
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
        </>
      )}
      <FormLabel className='cartLabel' htmlFor='email'>
        Почта*
      </FormLabel>
      {errors.email && <span className='text-red'>Невірна адреса пошти</span>}
      <Input
        id='email'
        size='lg'
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
      <FormLabel className='cartLabel' htmlFor='email'>
        Пароль*
      </FormLabel>
      {errors.password && (
        <span className='text-red'>Мінімальна довжина 8 символів</span>
      )}
      <InputGroup size='lg' backgroundColor='white'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          focusBorderColor='#FF7010'
          placeholder='12345678'
          {...register('password', { required: true, minLength: 8 })}
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

export default memo(Form)
