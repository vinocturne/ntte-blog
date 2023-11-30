import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'
import './index.css'
// import Layout from './components/layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <Layout> */}
    <RouterProvider router={Routes} />
    {/* </Layout> */}
  </React.StrictMode>,
)
