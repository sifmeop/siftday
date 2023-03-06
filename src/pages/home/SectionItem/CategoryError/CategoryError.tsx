import { IoClose } from 'react-icons/io5'
import styles from './CategoryError.module.scss'

interface Props {
  category: string
}

const CategoryError = ({ category }: Props) => {
  return (
    <div className={styles.errorWrapper}>
      <IoClose className={styles.icon} />
      <h1 className={styles.message}>
        Помилка завантаження категорії: <b>{category}</b>
      </h1>
    </div>
  )
}

export default CategoryError
