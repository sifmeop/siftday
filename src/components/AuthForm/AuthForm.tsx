import { memo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Divider } from '@chakra-ui/react'
import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import { useAuth } from 'hooks/useAuth'
import styles from './AuthForm.module.scss'
import Form from './Form/Form'
import GoogleAuth from './GoogleAuth/GoogleAuth'

interface Props {
  type: 'Login' | 'Register'
  analog: 'Login' | 'Register'
}

const AuthForm = ({ type, analog }: Props) => {
  const auth = useAuth().auth
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.currentUser) {
      navigate('/')
    }
  }, [auth.currentUser])

  return (
    <>
      <Logo className='mx-auto mb-2' />
      <p className='mb-5 text-center text-2xl font-bold'>
        {type === 'Login'
          ? 'Увійти до облікового запису'
          : 'Зареєструвати обліковий запис'}
      </p>
      <div className={styles.wrapper}>
        <Form type={type} />
        <Divider />
        <GoogleAuth />
        <p className='text-center'>
          {type === 'Register'
            ? 'У вас вже є обліковий запис?'
            : 'У вас немає облікового запису?'}{' '}
          <Link to={`/${analog.toLowerCase()}`} className={styles.link}>
            {analog === 'Register' ? 'Зареєструватись' : 'Увійти'}
          </Link>
        </p>
      </div>
    </>
  )
}

export default memo(AuthForm)
