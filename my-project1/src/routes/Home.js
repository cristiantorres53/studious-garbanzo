import { useFirestore } from "../hooks/usePropertiesPublic";

import { Card } from "react-bootstrap";
import LayoutHome from "../components/LayoutHome/LayoutHome";

const Home = () => {
  const { data, error, loading } = useFirestore();

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <LayoutHome/>
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

export default Home;
