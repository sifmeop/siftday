import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { products } from 'utils/products'
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
          <div className={styles.categories}>
            {products.map((product) => (
              <LinkScroll
                to={product.type}
                className='cursor-pointer'
                activeClass='text-primary'
                spy={true}
                smooth={true}
                duration={500}
                key={product.id}>
                {product.category}
              </LinkScroll>
            ))}
          </div>
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
