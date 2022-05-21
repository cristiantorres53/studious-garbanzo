import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider'

const Login = () => {

  const [email, setEmail] = useState("cristiancamilotorresrodriguez@gmail.com");
  const [password, setPassword] = useState("123456");

    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("procesando form", email, password);
      try {
        await login(email, password);
        navigate("/Admon")
      } catch (error) {
        console.log(error.code);
      }
    };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login