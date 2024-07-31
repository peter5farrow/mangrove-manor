import { useLoaderData, useNavigate } from "react-router-dom";
import Graphic from "../components/Graphic";
import CharacterButton from "../components/CharacterButton";
import PromptTextBox from "../components/PromptTextBox";

export default function GuessPage() {
  const { characters } = useLoaderData();
  const navigate = useNavigate();

  const handleGuess = async () => {
    //add guilty functionality
    navigate("/scene/778"); //leads to scene id of end page
  };

  const characterButtons = characters.map(
    ({ character_id, first_name, last_name, is_guilty }) => {
      const characterName = `${first_name} ${last_name}`;
      return (
        <div key={character_id}>
          <CharacterButton onClick={handleGuess} character={characterName} />
        </div>
      );
    }
  );

  return (
    <>
      <Graphic path="https://img.icons8.com/?size=100&id=m0X59wVKxiRO&format=png&color=000000" />
      <PromptTextBox prompt="Who do you think committed the crime?" />
      {characterButtons}
    </>
  );
}
