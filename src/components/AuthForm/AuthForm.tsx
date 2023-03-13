import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import { Link } from 'react-router-dom'
import styles from './AuthForm.module.scss'
import Form from './Form/Form'
import GoogleAuth from './GoogleAuth/GoogleAuth'

interface Props {
  type: 'Login' | 'Register'
  analog: 'Login' | 'Register'
}

const AuthForm = ({ type, analog }: Props) => {
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

export default AuthForm
