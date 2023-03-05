import Layout from 'components/Layout/Layout'
import Cart from 'pages/cart/Cart'
import Home from 'pages/home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])
