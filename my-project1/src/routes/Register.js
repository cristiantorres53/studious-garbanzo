import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const Register = () => {
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

      <h1>Register</h1>
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
              Registrarse
            </Button>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
};

export default Register;
