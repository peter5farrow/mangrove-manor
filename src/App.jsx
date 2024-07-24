import "./App.css";
import { Character } from "./model";

function App() {
  async function getCharacters() {
    const characters = await Character.findAll();

    const charList = characters.map((char) => {
      <li>{char.firstName}</li>;
    });

    return charList;
  }

  return (
    <>
      <h1>Here we go!</h1>
      <ul>{getCharacters()}</ul>
    </>
  );
}

export default App;
