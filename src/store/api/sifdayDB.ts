import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Drink } from 'types/drink.interface'
import { Pizza } from 'types/pizza.interface'
import { Sauce } from 'types/sauce.interface'
import { DB_URL } from 'utils/constants'

export const siftdayDB = createApi({
  reducerPath: 'sifdayDB',
  baseQuery: fetchBaseQuery({ baseUrl: DB_URL }),
  endpoints: (build) => ({
    // getAllProducts: build.query({
    //   query: ({}) => ({
    //     url: ``
    //   })
    // }),
    // getProduct: build.query({
    //   query: ({}) => ({
    //     url: ``
    //   })
    // }),
    getAllPizzas: build.query<Pizza[], void>({
      query: () => '/api/pizzas'
    }),
    getPizza: build.query<Pizza, { pizzaId: string }>({
      query: ({ pizzaId }) => `/api/pizzas/${pizzaId}`
    }),
    getAllDrinks: build.query<Drink[], void>({
      query: () => '/api/drinks'
    }),
    getDrink: build.query<Drink, { drinkId: string }>({
      query: ({ drinkId }) => `/api/drinks/${drinkId}`
    }),
    getAllSauces: build.query<Sauce[], void>({
      query: () => '/api/sauces'
    }),
    getSauce: build.query<Sauce, { sauceId: string }>({
      query: ({ sauceId }) => `/api/sauces/${sauceId}`
    })
  })
})

export const {
  useGetAllDrinksQuery,
  useGetAllPizzasQuery,
  useGetAllSaucesQuery,
  useGetDrinkQuery,
  useGetPizzaQuery,
  useGetSauceQuery
} = siftdayDB
