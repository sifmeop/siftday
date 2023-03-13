import Layout from 'components/Layout/Layout'
import Account from 'pages/account/Account'
import Cart from 'pages/cart/Cart'
import Error from 'pages/error/Error'
import Home from 'pages/home/Home'
import Login from 'pages/login/Login'
import Register from 'pages/register/Register'
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
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])
