import { useFirestore } from "../hooks/usePropertiesPublic";

import { Card, Modal, Button, Image } from "react-bootstrap";
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
      <LayoutProperties />
      <Image src=" https://res.cloudinary.com/dorkyjlu8/image/upload/v1653361562/reto-final-AG/Text_2_cseihx.png" />

      {data.map((item) => (
        <div key={item.nanoid}>
          <Card style={{ width: "18rem" }} onClick={handleShow}>
            <Button variant="success" size="sm" disabled>
              {item.estado}
            </Button>

            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Title>${item.precio}/mo</Card.Title>
            <Card.Body>
              <Card.Text>{item.categoria}</Card.Text>
              <Card.Title>{item.descripcion}</Card.Title>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <h3>{item.ubicacion}</h3>
              </div>

              <div>
                <Image src="https://res.cloudinary.com/dorkyjlu8/image/upload/v1653363141/reto-final-AG/MaskGroup2_svbha9.png"></Image>
                <h6>{item.nHabitaciones}</h6>
              </div>
              <div>
                <Image src="https://res.cloudinary.com/dorkyjlu8/image/upload/v1653363141/reto-final-AG/MaskGroup_mpsxwh.png"></Image>
                <h6>{item.nBanos}</h6>
              </div>
              <div>
                <Image src="https://res.cloudinary.com/dorkyjlu8/image/upload/v1653363141/reto-final-AG/MaskGroup1_dae94j.png"></Image>
                <h6>{item.nMetrosCuadrados}</h6>
              </div>
              
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
