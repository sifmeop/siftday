import clsx from 'clsx'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container')}>Footer</div>
    </footer>
  )
}

export default Footer
