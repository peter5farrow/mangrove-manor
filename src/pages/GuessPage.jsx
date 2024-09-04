import { useLoaderData, useNavigate } from "react-router-dom";
import Graphic from "../components/Graphic";
import CharacterButton from "../components/CharacterButton";
import PromptTextBox from "../components/PromptTextBox";
import CharactersTab from "../components/CharactersTab";

export default function GuessPage() {
  const { characters } = useLoaderData();
  const navigate = useNavigate();

  const handleGuess = (isGuilty) => {
    if (isGuilty === true) {
      navigate("/scene/778");
    } else if (isGuilty === false) {
      navigate("/scene/779");
    }
  };

  const characterButtons = characters.map(
    ({ character_id, first_name, last_name, is_guilty }) => {
      const characterName = `${first_name} ${last_name}`;
      return (
        <div key={character_id}>
          <CharacterButton
            onClick={handleGuess}
            character={characterName}
            isGuilty={is_guilty}
          />
        </div>
      );
    }
  );

  return (
    <>
      <Graphic path="https://img.icons8.com/?size=100&id=m0X59wVKxiRO&format=png&color=D1CCC5" />
      <PromptTextBox prompt="Who do you think committed the crime?" />
      {characterButtons}
      <CharactersTab characters={characters} />
    </>
  );
}
