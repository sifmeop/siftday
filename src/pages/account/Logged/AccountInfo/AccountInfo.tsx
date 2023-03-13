import { signOut } from 'firebase/auth'
import { useAuth } from 'hooks/useAuth'
import styles from './AccountInfo.module.scss'

const AccountInfo = () => {
  const auth = useAuth().auth

  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <div className={styles.accountInfo}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Ім'я:</span> {auth?.currentUser?.displayName}
        </li>
        {/* <li className={styles.item}> */}
        {/* <span>Номер телефону:</span>{' '} */}
        {/* {auth?.currentUser?.phoneNumber ?? 'Немає'} */}
        {/* </li> */}
        <li className={styles.item}>
          <span>Пошта:</span> {auth?.currentUser?.email}
        </li>
      </ul>
      <button className={styles.signOut} onClick={signOutHandler}>
        Вийти з облікового запису
      </button>
    </div>
  )
}

export default AccountInfo
