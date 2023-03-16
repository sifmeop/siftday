import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import clsx from 'clsx'
import styles from './Pagination.module.scss'

interface Props {
  currentPage: number
  setCurrentPage: (value: number) => void
  pages: number
  nextPage: () => void
  prevPage: () => void
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  pages,
  nextPage,
  prevPage
}: Props) => {
  const pageNumber = []

  for (let i = 1; i <= pages; i++) {
    pageNumber.push(i)
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={prevPage}>
        <MdKeyboardArrowLeft size='2rem' />
      </button>
      {pageNumber.map((page) => (
        <button
          key={page}
          className={clsx(styles.page, {
            [styles.active]: page === currentPage
          })}
          onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button className={styles.arrow} onClick={nextPage}>
        <MdKeyboardArrowRight size='2rem' />
      </button>
    </div>
  )
}

export default Pagination
