import { useState } from 'react'

export const usePagination = (items: any[]) => {
  const [currentPage, setCurrentPage] = useState(1)

  const perPage = 4
  const pages = Math.ceil(items.length / perPage)

  const lastPageIndex = currentPage * perPage
  const firstPageIndex = lastPageIndex - perPage
  const itemsOnPage = items.slice(firstPageIndex, lastPageIndex)

  const nextPage = () => {
    if (currentPage + 1 > pages) return
    setCurrentPage((prev) => prev + 1)
  }

  const prevPage = () => {
    if (currentPage - 1 === 0) return
    setCurrentPage((prev) => prev - 1)
  }

  return { currentPage, setCurrentPage, itemsOnPage, pages, nextPage, prevPage }
}
