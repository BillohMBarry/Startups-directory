import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
function MainLayOut() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayOut
