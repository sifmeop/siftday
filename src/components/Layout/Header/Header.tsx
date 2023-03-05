import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Cart from './Cart/Cart'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.headerContainer)}>
        <Link to='/' className={styles.logo}>
          <Logo />
          <h1 className={styles.title}>siftday</h1>
        </Link>
        <Cart />
      </div>
    </header>
  )
}

export default Header
