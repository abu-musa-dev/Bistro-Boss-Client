import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import{RouterProvider}  from'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-3/4  mx-auto'>
      {
        <RouterProvider router={router} />
      }
    </div>
  </StrictMode>,
)
