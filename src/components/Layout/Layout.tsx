import { onAuthStateChanged } from '@firebase/auth'
import { useActionCreators } from 'hooks/useActionCreators'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { userActions } from 'store/slices/userSlice'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Main from './Main/Main'

const Layout = () => {
  const auth = useAuth().auth

  const actions = useActionCreators(userActions)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      actions.setUser({
        id: user.uid,
        email: user.email,
        name: user.displayName
      })
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}

export default Layout
