import { signOut } from 'firebase/auth'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  const isAuth = useAuth().isAuth
  const auth = useAuth().auth

  useEffect(() => {
    console.log(auth.currentUser)
  }, [auth.currentUser])

  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <>
      {isAuth ? (
        <div>
          <h1>{auth.currentUser.displayName}</h1>
          <button onClick={signOutHandler}>выйти</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )}
    </>
  )
}

export default Account
