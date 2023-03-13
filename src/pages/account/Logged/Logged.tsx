import { useState } from 'react'
import Switch from 'ui/Switch/Switch'
import AccountInfo from './AccountInfo/AccountInfo'
import HistoryOrders from './HistoryOrders/HistoryOrders'
import styles from './Logged.module.scss'

type Switch = 'Історія замовлень' | 'Аккаунт'

const Logged = () => {
  const [selection, setSelection] = useState<Switch>('Історія замовлень')

  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title}>Мій аккаунт</h1>
        <Switch
          labels={['Історія замовлень', 'Аккаунт']}
          selection={selection}
          // @ts-ignore
          setSelection={setSelection}
        />
      </div>
      {selection === 'Історія замовлень' ? <HistoryOrders /> : <AccountInfo />}
    </>
  )
}

export default Logged
