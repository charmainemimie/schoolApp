//import React from 'react'

import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const MainArea = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainArea