import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Keyword from './Components/Keyword.jsx'
const Links=createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/searchKeyword",
    element: <Keyword/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Links} />
  </React.StrictMode>,
)
