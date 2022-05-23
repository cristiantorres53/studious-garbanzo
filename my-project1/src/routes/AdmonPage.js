// import { useAuth } from "../context/authContext";
import React, { useState, useEffect } from "react";

import { useAuth } from "../context/authContext";
import { useFirestore } from "../hooks/usePropertiesAdmon";
import { Card } from "react-bootstrap";
//import { nanoid } from "nanoid";

const AdmonPage = () => {
  const { logout } = useAuth();
  const { data, error, loading, getData, addData, deleteData } = useFirestore();
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(text, text1, text2, text3, text4, text5, text6, text7, text8);
    setText("");
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setText6("");
    setText7("");
    setText8("");
    console.log(text8);
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
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
            placeholder="ingrese el precio"
            value={text1}
            type="number"
            onChange={(e) => setText1(e.target.value)}
          />

          <input
            placeholder="ingrese la categoria"
            value={text2}
            type="text"
            onChange={(e) => setText2(e.target.value)}
          />

          <input
            placeholder="ingrese la descripcion"
            value={text3}
            type="text"
            onChange={(e) => setText3(e.target.value)}
          />

          <input
            placeholder="ingrese la ubicacion"
            value={text4}
            type="text"
            onChange={(e) => setText4(e.target.value)}
          />

          <input
            placeholder="ingrese el numero de habitaciones"
            value={text5}
            type="number"
            onChange={(e) => setText5(e.target.value)}
          />

          <input
            placeholder="ingrese el numero de baños"
            value={text6}
            type="number"
            onChange={(e) => setText6(e.target.value)}
          />

          <input
            placeholder="ingrese el numero de metros cuadrados"
            value={text7}
            type="number"
            onChange={(e) => setText7(e.target.value)}
          />

          <input
            placeholder="seleccione si tiene seguridad privada"
            value={text8}
            type="checkbox"
            checked="false"
            onChange={(e) => setText8(e.target.value)}
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
                <button
                  type="button"
                  onClick={() => handleClickDelete(item.nanoid)}
                >
                  Eliminar
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmonPage;
