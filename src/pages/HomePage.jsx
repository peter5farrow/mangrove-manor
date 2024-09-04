import Graphic from "../components/Graphic";
import { Container } from "react-bootstrap";
import PromptTextBox from "../components/PromptTextBox";
import NameInputBox from "../components/NameInputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";
import "../styles/HomePageStyle.css";

export default function HomePage() {
  const navigate = useNavigate();
  const { guiltyChar, setGuiltyChar, userName, setUserName } = useGuiltyChar();

  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleName = async (e, name) => {
    e.preventDefault();
    const res = await axios.post("/api/player_name", name);

    if (res.data.name) {
      const playerName = capitalize(res.data.name);
      console.log(`Name: ${playerName}`);
      setUserName(playerName);
      navigate("/scene/1");

      const res2 = await axios.post("/api/allcharacters", {
        isGuilty: false,
      });
      if (res2.data.success) {
        console.log("Characters reset");
        setGuiltyChar(null);
      }
    }
  };

  return (
    <>
      <Graphic path="https://img.icons8.com/?size=100&id=2797&format=png&color=D1CCC5" />
      <Container id="prompt-cont">
        <PromptTextBox prompt="Welcome to Mangrove Manor. Please enter your name to continue:" />
      </Container>
      <NameInputBox onInput={handleName} />
    </>
  );
}
