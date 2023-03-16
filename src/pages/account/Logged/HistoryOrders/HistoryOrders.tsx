import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'

import { HistoryOrder } from 'types/history-order'
import OrderItem from './OrderItem/OrderItem'
import Pagination from 'ui/Pagination/Pagination'
import { db } from '../../../../../firebase'
import styles from './HistoryOrders.module.scss'
import { useAuth } from 'hooks/useAuth'
import { usePagination } from 'hooks/usePagination'

const HistoryOrders = () => {
  const auth = useAuth().auth

  const [orders, setOrders] = useState<HistoryOrder[]>([])

  const {
    currentPage,
    setCurrentPage,
    itemsOnPage,
    pages,
    nextPage,
    prevPage
  } = usePagination(orders)

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

  return (
    <>
      {orders.length ? (
        <>
          {itemsOnPage.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      ) : (
        <h1 className={styles.noOrders}>Замовлень немає</h1>
      )}
    </>
  )
}

export default HistoryOrders
