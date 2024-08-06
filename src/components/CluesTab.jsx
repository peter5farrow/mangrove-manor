import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";

export default function CluesTab() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { clues, setClues } = useGuiltyChar();

  const cluesList = clues.map((clue) => {
    return <li key={clue}>{clue}</li>;
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        CLUES
      </Button>
      <Offcanvas show={show} placement="bottom" onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>CLUES</Offcanvas.Title>
          <Button onClick={handleClose}>x</Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>{cluesList}</ul>
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
