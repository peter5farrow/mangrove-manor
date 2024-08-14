import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";

export default function CluesTab({ characters }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else if (show) {
      setShow(false);
    }
  };

  const charsList = characters.map((character) => {
    return (
      <li key={character.first_name}>
        {character.first_name} {character.last_name}
        <br />
        Age: {character.age}
        <br />
        Hair color: {character.hair_color}
        <br />
        Favorite food: {character.fav_food}
        <br />
        Job: {character.occupation}
      </li>
    );
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Characters
      </Button>
      <Offcanvas show={show} placement="bottom" onHide={handleShow}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>{charsList}</ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function Example() {
//   return (
//     <>
//       {["start", "end", "top", "bottom"].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }
