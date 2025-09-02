import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/page.jsx'
import Orders from './pages/orders/page.jsx'
import Profile from './pages/profile/page.jsx'
import Plates from './pages/plates/page.jsx'
import Users from './pages/users/page.jsx'
import Auth from './pages/auth/page.jsx'

const pages = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {path: '/home', element: <Home/>},
    {path: '/orders', element: <Orders/>},
    {path: '/profile', element: <Profile/>},
    {path: '/plates', element: <Plates/>},
    {path: '/users', element: <Users/>},
    {path: '/', element: <Auth/>}
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}/>
  </StrictMode>,
)
