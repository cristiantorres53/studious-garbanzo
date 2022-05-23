import { useFirestore } from "../hooks/usePropertiesPublic";

import { Card, Modal, Button } from "react-bootstrap";
import LayoutHome from "../components/LayoutHome/LayoutHome";
import { useState } from "react";
import LayoutProperties from "../components/LayoutProperties/LayoutProperties";

const Home = () => {
  const { data, error, loading } = useFirestore();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <LayoutHome />
      <LayoutProperties/>
      {data.map((item) => (
        <div key={item.nanoid}>
          <Card style={{ width: "18rem" }} onClick={handleShow}>
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

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{item.descripcion}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Home;
