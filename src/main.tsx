import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Challenge2 from './Challanges/challange2/Challenge2.tsx'
import Challange1 from './Challanges/challange1/Challenge1.tsx'
import Challange3 from './Challanges/challange3/Challange3.tsx'
import Challenge4 from './Challanges/challenge4/Challenge4.tsx'

const router = createBrowserRouter([
  {path: '', element: <App />},
  {path: 'challenge/1', element: <Challange1/>},
  {path: 'challenge/2', element: <Challenge2/>},
  {path: 'challenge/3', element: <Challange3/>},
  {path: 'challenge/4', element: <Challenge4/>},
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
