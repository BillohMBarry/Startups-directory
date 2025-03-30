
import './App.css'
import "tailwindcss"
import Home from "./Components/Home"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import StartupDetails from './Components/StartupDetails'
import AddStartup from './Components/AddStartup'
import UpdateStartup from './Components/UpdateStartup'
import MainLayOut from './Layout/MainLayOut'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayOut/>}>
    
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/updateStartup/:name" element={<UpdateStartup/>}/>
      <Route path="/addStartup" element={<AddStartup/>}/>
      <Route path="/startUpsDetails/:name" element={<StartupDetails/>}/>
    </Route>
  )
)
function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
  
    </>
  )
}

export default App
