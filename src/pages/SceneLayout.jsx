import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CluesTab from "../components/CluesTab";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SceneLayout() {
  const {
    scene: {
      scene_id,
      scene_prompt,
      left_scene_name,
      left_scene_id,
      right_scene_name,
      right_scene_id,
      graphic_path,
    },
  } = useLoaderData();

  // const [sceneIdState, setSceneIdState] = useState(1);
  const navigate = useNavigate();

  const handleSceneChange = async (scene_id) => {
    navigate(`/scene/${scene_id}`);
  };

  return (
    <>
      <Graphic path={graphic_path} />
      <PromptTextBox prompt={scene_prompt} />
      <LeftButton
        text={left_scene_name}
        optionId={left_scene_id}
        onClick={handleSceneChange}
      />
      <RightButton
        text={right_scene_name}
        optionId={right_scene_id}
        onClick={handleSceneChange}
      />
      <CluesTab />
    </>
  );
}
