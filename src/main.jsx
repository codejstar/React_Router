import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/ContactUs/ContactUs.jsx'
import './index.css'
import User from './Component/User/User.jsx'
import Github, {githubInfoLoader} from './Component/Github/Github.jsx'
import Error from './Component/Errorelement/Error.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//      {
//       path: '',
//       element: <Home />
//      },
//      {
//       path:'about',
//       element: <About/>
//      },
//      {
//       path: 'contactUs',
//       element: <Contact/>
//      }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error/>} element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contactUs' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>  
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github/>
        }/>  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
