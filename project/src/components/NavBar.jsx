import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const NavBar = () => {
  const { user, logOutUSer } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await logOutUSer();
      navigate("/Login");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <NavLink to="/Admon">Admon</NavLink>
          <button onClick={handleClickLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <NavLink to="/Register">Registro</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/">Inicio</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
