import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CluesTab from "../components/CluesTab";
import { useLoaderData } from "react-router-dom";

export default function SceneLayout() {
  const {
    scene: {
      scene_name,
      scene_prompt,
      left_button_option,
      right_button_option,
      graphic_path,
      player_name,
    },
  } = useLoaderData();

  const handleSceneChange = async (e, scene_id) => {
    const res = await axios.get(`/api/scene/${scene_id}`);
    navigate(`/scene/${scene_id}`);
  };

  return (
    <>
      <Graphic path={graphic_path} />
      <PromptTextBox playerName={player_name} prompt={scene_prompt} />
      <LeftButton text={left_button_option} onClick={handleSceneChange} />
      <RightButton text={right_button_option} onClick={handleSceneChange} />
      <CluesTab />
    </>
  );
}
