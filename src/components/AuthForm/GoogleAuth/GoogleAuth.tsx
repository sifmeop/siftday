import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { useToast } from '@chakra-ui/react'
import { useActionCreators } from 'hooks/useActionCreators'
import { useAuth } from 'hooks/useAuth'
import { BsGoogle } from 'react-icons/bs'
import { userActions } from 'store/slices/userSlice'
import styles from './GoogleAuth.module.scss'

const GoogleAuth = () => {
  const auth = useAuth().auth
  const googleProvider = new GoogleAuthProvider()
  const actions = useActionCreators(userActions)
  const toast = useToast()

  const signInGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
        actions.setUser({
          id: user.uid,
          email: user.email,
          name: user.displayName
        })
        toast({
          title: 'В аккаунт увійдено',
          position: 'top',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        console.log(error)
        toast({
          title: 'Помилка реєстрації',
          position: 'top',
          status: 'error',
          isClosable: true
        })
      })
  }

  return (
    <button className={styles.button} onClick={signInGoogle}>
      <BsGoogle size='1.8rem' className={styles.icon} />
    </button>
  )
}

export default GoogleAuth
