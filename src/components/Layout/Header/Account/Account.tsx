import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Account.module.scss'

const Account = () => {
  return (
    <Link to='/account' className={styles.account}>
      <FaRegUser />
    </Link>
  )
}

export default Account
