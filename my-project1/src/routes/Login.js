import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await login(user.email, user.password);
      navigate("/admon");
    } catch (error) {
      console.log(error.code);
    }
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/admon");
  };

  const handleFacebookSignIn =async()=>{
    await loginWithFacebook();
    navigate("/admon")
  }

  return (
    <div>
      {error && <p>{error}</p>}
      Register
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="ingrese su email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="ingrese el password"
          id="password"
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
      <button onClick={handleGoogleSignIn}>Ingresar con google</button>
      <button onClick={handleFacebookSignIn}>Ingresar con facebook</button>
    </div>
  );
};

export default Login;
