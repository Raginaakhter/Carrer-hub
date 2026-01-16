import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home';
import Appliedjobs from './components/Appliedjobs';
import Errorpage from './components/Errorpage';
import JobDetails from './components/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
        {
        path:'/appliedjobs',
        element:<Appliedjobs/>,
         loader: () => fetch('/jobs.json') 

      },
     {
  path: '/job/:id', 
  element: <JobDetails />,
  loader: () => fetch('/jobs.json') 
}


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
