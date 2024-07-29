import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import NameInputBox from "../components/NameInputBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();

  const handleName = async (e, name) => {
    e.preventDefault();
    const res = await axios.post("/api/player_name", name);
    if (res.data.success) {
      navigate("/scene/1"); //this leads to first scene
      console.log(name);
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
