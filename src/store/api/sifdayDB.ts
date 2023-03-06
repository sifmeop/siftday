import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Product } from 'types/product.interface'
import { DB_URL } from 'utils/constants'

export const siftdayDB = createApi({
  reducerPath: 'sifdayDB',
  baseQuery: fetchBaseQuery({ baseUrl: DB_URL }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], { type: string }>({
      query: ({ type }) => ({
        url: `/${type}`
      })
    })
  })
})

export const { useGetProductsQuery } = siftdayDB
