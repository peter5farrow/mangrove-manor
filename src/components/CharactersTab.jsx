import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/CharactersTabStyle.css";

export default function CharactersTab({ characters }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else if (show) {
      setShow(false);
    }
  };

  const charsList = characters.map((character) => {
    function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1);
    }

    return (
      <li key={character.first_name}>
        <strong>Name:</strong> {character.first_name} {character.last_name}
        <br />
        <strong>Age:</strong> {character.age}
        <br />
        <strong>Birthplace:</strong> {character.birthplace}
        <br />
        <strong>Job:</strong> {capitalize(character.occupation)}
        <br />
        <strong>Hair color:</strong> {capitalize(character.hair_color)}
        <br />
        <strong>Favorite food:</strong> {capitalize(character.fav_food)}
        <br />
        <br />
      </li>
    );
  });

  return (
    <>
      <button id="characters-button" onClick={handleShow}>
        Characters
      </button>
      <Offcanvas
        id="characters-offcanvas"
        show={show}
        placement="end"
        onHide={handleShow}
      >
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
