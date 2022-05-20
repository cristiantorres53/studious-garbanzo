import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/Register">Registro</NavLink>
      <NavLink to="/admon">Admon</NavLink>
    </div>
  );
};

export default NavBar;
