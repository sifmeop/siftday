import { useAuth } from 'hooks/useAuth'
import Guest from './Guest/Guest'
import Logged from './Logged/Logged'

const Account = () => {
  const isAuth = useAuth().isAuth

  return <>{isAuth ? <Logged /> : <Guest />}</>
}

export default Account
