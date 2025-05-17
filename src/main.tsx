import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Challenge2 from './Challanges/challange2/Challenge2.tsx'
import Challange1 from './Challanges/challange1/Challenge1.tsx'
import Challange3 from './Challanges/challange3/Challange3.tsx'
import Challenge4 from './Challanges/challenge4/Challenge4.tsx'
import Challenge5 from './Challanges/challenge5/Challenge5.tsx'
import Challenge6 from './Challanges/challenge6/Challenge6.tsx'
import Challenge10 from './Challanges/challenge10/Challenge10.tsx'

const router = createBrowserRouter([
  {path: '', element: <App />},
  {path: 'challenge/1', element: <Challange1/>},
  {path: 'challenge/2', element: <Challenge2/>},
  {path: 'challenge/3', element: <Challange3/>},
  {path: 'challenge/4', element: <Challenge4/>},
  {path: 'challenge/5', element: <Challenge5/>},
  {path: 'challenge/6', element: <Challenge6/>},
  {path: 'challenge/10', element: <Challenge10/>},
])



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
