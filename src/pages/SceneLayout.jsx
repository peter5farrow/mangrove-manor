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

  const [guiltyChar, setGuiltyChar] = useState({});

  const navigate = useNavigate();

  const handleSceneChange = async (scene_id) => {
    if (scene_id === 2) {
      const res = await axios.post("/api/characters", {
        is_guilty: true,
      });
      setGuiltyChar(res.data);
    }

    navigate(`/scene/${scene_id}`);
    console.log(guiltyChar);
  };

  const handleLastScene = async () => {
    navigate("/guess");
  };

  return (
    <>
      <Graphic path={graphic_path} />
      <PromptTextBox prompt={scene_prompt} guiltyChar={guiltyChar} />
      <LeftButton
        text={left_scene_name}
        optionId={left_scene_id}
        onClick={handleSceneChange}
        onLastScene={handleLastScene}
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
