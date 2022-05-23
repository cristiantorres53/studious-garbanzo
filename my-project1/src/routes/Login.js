import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

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

  const handleFacebookSignIn = async () => {
    await loginWithFacebook();
    navigate("/admon");
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Login</h1>
      <Card style={{ width: "18rem" }}>
        <form onSubmit={handleSubmit}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Ingrese su correo
            </Card.Subtitle>
            <Form.Control type="email" name="email" onChange={handleChange} />
            <Card.Subtitle className="mb-2 text-muted">
              Ingrese su contraseña
            </Card.Subtitle>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Button variant="success" type="submit">
              Ingresar
            </Button>
            <Button variant="ligth" type="submit" onClick={handleGoogleSignIn}>
              Ingresar con Google
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleFacebookSignIn}
            >
              Ingresar con Facebook
            </Button>
            <Card.Link href="/Register">Registrarse</Card.Link>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
};

export default Login;
