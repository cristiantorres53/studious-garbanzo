// import { useAuth } from "../context/authContext";
import React, { useState, useEffect } from "react";

import { useAuth } from "../context/authContext";
import { useFirestore } from "../hooks/usePropertiesAdmon";
import { Card } from "react-bootstrap";

const AdmonPage = () => {
  const { logout } = useAuth();
  const { data, error, loading, getData, addData } = useFirestore();
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(text, text1);
    setText("");
    setText1("");
    console.log(text, text1);
  };

  const handleLogout = async () => {
    await logout();
  };

  // if (loading) return <h1>Cargando</h1>;

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const loadingData = loading.getData && <p>loading data...</p>;
  const errorData = error && <p>{error}</p>;

  return (
    <div>
      {/* <h1>Bienvenido {user.email}</h1> */}

      <button onClick={handleLogout}>Logout</button>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="ingrese el estado"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            placeholder="ingrese el estado"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />

          <button type="submit">enviar</button>
        </form>
      </div>

      <div>
        {loadingData}
        {errorData}
        {data.map((item) => (
          <div key={item.nanoid}>
            <Card style={{ width: "18rem" }}>
              <Card.Title>{item.estado}</Card.Title>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>{item.precio}</Card.Title>
              <Card.Body>
                <Card.Text>{item.categoria}</Card.Text>
                <Card.Title>{item.descripcion}</Card.Title>
                <Card.Text>{item.ubicacion}</Card.Text>
                <Card.Text>{item.nHabitaciones}</Card.Text>
                <Card.Text>{item.nBanos}</Card.Text>
                <Card.Text>{item.nMetrosCuadrados}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmonPage;