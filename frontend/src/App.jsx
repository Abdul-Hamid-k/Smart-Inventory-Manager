import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import AppAuthLayout from './pages/AppAuthLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Customers from './pages/Customers.jsx'
import Inventory from './pages/Inventory.jsx'
import Purchases from './pages/Purchases.jsx'
import Sales from './pages/Sales.jsx'
import AppUnauthLayout from './pages/AppUnauthLayout.jsx'
import Logout from './pages/Logout.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppUnauthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/register',
        element: <Register />
      }
    ]
  }, {
    path: '/',
    element: <UserProtectedWrapper> <AppAuthLayout /> </UserProtectedWrapper>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }, {
        path: '/inventory',
        element: <Inventory />
      }, {
        path: '/purchase',
        element: <Purchases />
      }, {
        path: '/sales',
        element: <Sales />
      }, {
        path: '/customers',
        element: <Customers />
      }
    ]
  }, {
    path: '/logout',
    element: <Logout />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App