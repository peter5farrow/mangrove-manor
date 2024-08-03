import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CluesTab from "../components/CluesTab";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import lodash from "lodash";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";

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

  const navigate = useNavigate();

  const { guiltyChar, setGuiltyChar } = useGuiltyChar();

  const handleSceneChange = async (scene_id) => {
    if (scene_id === 1) {
      const res = await axios.post("/api/allcharacters", {
        isGuilty: false,
      });
      if (res.data.success) {
        console.log("Characters reset");
        setGuiltyChar(null);
      }
    } else if (scene_id === 2) {
      const res = await axios.post("/api/characters", {
        characterId: lodash.random(1, 5),
      });
      console.log(res.data);
      setGuiltyChar(res.data);
    }
    navigate(`/scene/${scene_id}`);
  };

  const handleLastScene = async () => {
    navigate("/guess");
  };

  return (
    <>
      <Graphic path={graphic_path} />
      <PromptTextBox
        sceneId={scene_id}
        prompt={scene_prompt}
        guiltyChar={guiltyChar}
      />
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
