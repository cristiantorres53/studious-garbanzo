import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await userSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <NavLink to="/">Inicio</NavLink>{" "}
          <button onClick={handleClickLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <NavLink to="/Register">Registro</NavLink>
          <NavLink to="/Admon">Admon</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
