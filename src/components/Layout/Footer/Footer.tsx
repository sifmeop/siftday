import clsx from 'clsx'
import { BsGithub } from 'react-icons/bs'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footerContainer)}>
        <a
          target='_blank'
          href='https://github.com/sifmeop'
          className={styles.sifmeop}>
          <BsGithub />
          sifmeop
        </a>
      </div>
    </footer>
  )
}

export default Footer
