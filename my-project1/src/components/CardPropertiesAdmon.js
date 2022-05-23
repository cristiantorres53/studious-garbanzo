import React, { useEffect } from "react";
import { useFirestore } from "../hooks/usePropertiesAdmon";

import { Card } from "react-bootstrap";

const CardPropertiesAdmon = () => {
  const { data, error, loading, getData } = useFirestore();

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const loadingData = loading.getData && <p>loading data...</p>
  const errorData = error && <p>{error}</p>

  return (
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
  );
};

export default CardPropertiesAdmon;
