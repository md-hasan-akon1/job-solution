import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import JobDetails from './Component/JobDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch('jobCategory.json')
      },
      {
        path:'/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('Future.json')
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}

    ></RouterProvider>
  </React.StrictMode>,
)
