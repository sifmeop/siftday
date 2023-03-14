import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'

import { useAuth } from 'hooks/useAuth'
import { HistoryOrder } from 'types/history-order'
import { db } from '../../../../../firebase'
import styles from './HistoryOrders.module.scss'
import OrderItem from './OrderItem/OrderItem'

const HistoryOrders = () => {
  const auth = useAuth().auth
  const [orders, setOrders] = useState<HistoryOrder[]>([])

  useEffect(() => {
    const ordersRef = ref(db, 'orders/' + `${auth.currentUser!.uid}/`)
    return onValue(ordersRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        setOrders(Object.values(data))
      } else {
        setOrders([])
      }
    })
  }, [])

  useEffect(() => {
    console.log(orders)
  }, [orders])

  return (
    <>
      {orders.length ? (
        <>
          {orders.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h1 className={styles.noOrders}>Замовлень немає</h1>
      )}
    </>
  )
}

export default HistoryOrders
