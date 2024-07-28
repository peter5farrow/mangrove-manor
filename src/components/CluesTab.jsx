import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CluesTab({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}CLUES
      </Button>
      <Offcanvas show={show} placement="bottom" onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Clues</Offcanvas.Title>
          <Button onClick={handleClose}>x</Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>clue</li>
            <li>another clue</li>
            <li>and another one</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
