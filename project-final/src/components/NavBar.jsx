import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink to={"/home"}>Inicio</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
    </div>
  )
}

export default NavBar