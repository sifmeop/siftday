import { ReactComponent as Logo } from 'assets/image/favicon.svg'
import clsx from 'clsx'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footerContainer)}>
        <Link to='/' className={styles.logo}>
          <Logo />
          <h1 className={styles.title}>siftday</h1>
        </Link>
        <a
          target='_blank'
          href='https://github.com/sifmeop'
          className={styles.title}>
          <BsGithub />
          sifmeop
        </a>
      </div>
    </footer>
  )
}

export default Footer
