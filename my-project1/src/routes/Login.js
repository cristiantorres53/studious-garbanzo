import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return <div>
      <input type="email" placeholder="ingrese el email"/>
      <input type="password" placeholder="ingrese la contraseña"/>
  </div>;
};

export default Login;
