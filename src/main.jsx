import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/Homepage'
import { router } from './routes/Routes'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
