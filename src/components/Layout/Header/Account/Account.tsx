import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri'

import { useAuth } from 'hooks/useAuth'
import { Link } from 'react-router-dom'
import styles from './Account.module.scss'

const Account = () => {
  const isAuth = useAuth().isAuth

  return (
    <Link to='/account' className={styles.account}>
      {isAuth ? (
        <RiUserFollowLine size='1.5rem' />
      ) : (
        <RiUserUnfollowLine size='1.5rem' />
      )}
    </Link>
  )
}

export default Account
