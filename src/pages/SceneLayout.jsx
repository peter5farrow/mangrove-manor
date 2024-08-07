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
  const { guiltyChar, setGuiltyChar, userName, clues, setClues } =
    useGuiltyChar();

  const getRandomClue = async () => {
    const res = await axios.get(`/api/food/${lodash.random(1, 5)}`);
    console.log(res.data);
    return res.data;
  };

  const handleSceneChange = async (scene_id) => {
    if (scene_id === 1) {
      const res = await axios.post("/api/allcharacters", {
        isGuilty: false,
      });
      if (res.data.success) {
        console.log("Characters reset");
        setGuiltyChar(null);
        setClues(["Clues will appear here"]);
      }
    } else if (scene_id === 2) {
      const res = await axios.post("/api/characters", {
        characterId: lodash.random(1, 5),
      });
      if (res.data) {
        const res2 = await axios.get("/api/guiltychar");
        console.log(res2.data);
        setGuiltyChar(res2.data);
      }
    } else if (!guiltyChar) {
      navigate("/scene/1");
    } else {
      setClues([guiltyChar.food.food_clue]);
    }

    navigate(`/scene/${scene_id}`);
  };

  const handleLastScene = async () => {
    navigate("/guess");
  };

  if (scene_id != 778 && scene_id != 779) {
    return (
      <>
        <Graphic path={graphic_path} />
        <PromptTextBox sceneId={scene_id} prompt={scene_prompt} />
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
  } else {
    return (
      <>
        <Graphic path={graphic_path} />
        <PromptTextBox sceneId={scene_id} prompt={scene_prompt} />
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
      </>
    );
  }
}
