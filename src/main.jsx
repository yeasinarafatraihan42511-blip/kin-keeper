import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/Homepage'



const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout />,
    children:[
      {
        index:true,
        element:<Homepage />
      },
      {
        path: "/books",
        element: "<Books />"
      }

    ]
  },
  {
    path: '/about',
    element:"This is the about page.",
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
