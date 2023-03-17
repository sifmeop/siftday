import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Account from './Account/Account'
import Cart from './Cart/Cart'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.headerContainer)}>
        <div className={styles.headerItems}>
          <Link to='/' className={styles.logo}>
            <Logo />
            <h1 className={styles.title}>siftday</h1>
          </Link>
        </div>
        <div className={styles.headerItems}>
          <Cart />
          <Account />
        </div>
      </div>
    </header>
  )
}

export default Header
