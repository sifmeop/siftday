import Cart from '../pages/cart/Cart'
import Home from '../pages/home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/pizzas/:id',
  //   element:
  // },
  // {
  //   path: '/sauces/:id',
  //   element:
  // },
  // {
  //   path: '/drinks/:id',
  //   element:
  // },
  {
    path: '/cart',
    element: <Cart />
  }
])
