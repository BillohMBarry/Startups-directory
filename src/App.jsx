
import './App.css'
import "tailwindcss"
import Home from "./Components/Home"
import StartupDetails from './Components/StartupDetails'
import AddStartup from './Components/AddStartup'
import UpdateStartup from './Components/UpdateStartup'
import MainLayOut from './Layout/MainLayOut'
import { Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <MainLayOut />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/updateStartup/:name' element={<UpdateStartup/>}/>
        <Route path='/addStartup' element={<AddStartup/>}/>
        <Route path='/startupsDetails/:name' element={<StartupDetails/>}/>
      </Routes>
    </>
  )
}

export default App
