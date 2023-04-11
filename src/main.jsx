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
import AppliedJobs from './Component/AppliedJobs';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
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
      },
      {
        path:'/appliedJob',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('Future.json')
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
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
