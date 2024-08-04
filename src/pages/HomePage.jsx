import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import NameInputBox from "../components/NameInputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { userName, setUserName } = useGuiltyChar();

  const handleName = async (e, name) => {
    e.preventDefault();
    const res = await axios.post("/api/player_name", name);
    if (res.data.name) {
      navigate("/scene/1");
      console.log(`Name: ${res.data.name}`);
      setUserName(res.data.name);
    }
  };

  return (
    <>
      <Graphic path="https://img.icons8.com/?size=100&id=2797&format=png&color=206332" />
      <PromptTextBox prompt="Welcome to Mangrove Manor. Please enter your name to continue:" />
      <NameInputBox onInput={handleName} />
    </>
  );
}
