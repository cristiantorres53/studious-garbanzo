import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await signup(user.email, user.password);
      navigate("/admon");
    } catch (error) {
      console.log(error.code);
    }
  };

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

        <button>Registrar</button>
      </form>
    </div>
  );
};

export default Register;