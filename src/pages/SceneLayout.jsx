import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CluesTab from "../components/CluesTab";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import lodash from "lodash";

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
  let guiltyCharId;

  const handleSceneChange = async (scene_id) => {
    if (scene_id === 1) {
      const res = await axios.post("/api/allcharacters", {
        isGuilty: false,
      });
      console.log(`Success: ${res.data.success}`);
    } else if (scene_id === 2) {
      guiltyCharId = lodash.random(1, 5);
      const res = await axios.post("/api/characters", {
        characterId: guiltyCharId,
      });
      console.log(res.data);
    } else if (scene_id != 1 && scene_id != 2) {
      const res = await axios.get("/api/guiltychar");
      console.log(res.data);
    }

    navigate(`/scene/${scene_id}`);
  };

  // const getFoodClue = async () => {
  //   if (guiltyChar) {
  //     const res = await axios.get(`/api/food/${guiltyChar.character_id}`);
  //     return res.data.food_clue;
  //   }
  // };
  // const getJobClue = async () => {
  //   if (guiltyChar) {
  //     const res = await axios.get(`/api/jobs/${guiltyChar.character_id}`);
  //     return res.data.job_clue;
  //   }
  // };

  const handleLastScene = async () => {
    navigate("/guess");
  };

  return (
    <>
      <Graphic path={graphic_path} />
      <PromptTextBox prompt={scene_prompt} guiltyChar={guiltyCharId} />
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
