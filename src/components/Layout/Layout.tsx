import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Main from './Main/Main'

const Layout = () => {
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
