import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error404 from './Components/Error404.jsx'
import Service from './Components/Service.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Layout from './Components/Layout.jsx'

// Creating the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wraps everything
    errorElement: <Error404 />,
    children: [
      {
        index: true, // This means "/" route
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
