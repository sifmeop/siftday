import { Link } from 'react-router-dom'
import styles from './Guest.module.scss'

const Guest = () => {
  return (
    <div className={styles.guest}>
      <Link to='/login' className={styles.link}>
        Увійти
      </Link>
      <Link to='/register' className={styles.link}>
        Зареєструватись
      </Link>
    </div>
  )
}

export default Guest
