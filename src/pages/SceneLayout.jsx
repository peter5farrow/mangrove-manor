import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CharactersTab from "../components/CharactersTab";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import lodash from "lodash";
import { useGuiltyChar } from "../contexts/GuiltyCharContext";
import GuessButton from "../components/GuessButton";
import { Container } from "react-bootstrap";
import "../styles/SceneLayoutStyle.css";

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
    characters,
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
      if (res.data) {
        const res2 = await axios.get("/api/guiltychar");
        console.log(res2.data);
        setGuiltyChar(res2.data);
      }
    } else if (!guiltyChar) {
      navigate("/scene/1");
    }
    navigate(`/scene/${scene_id}`);
  };

  const handleLastScene = async () => {
    navigate("/guess");
  };

  // TO ADD: fix refresh bug
  // if (!guiltyChar) {
  //   return;
  // }

  if (scene_id != 1 && scene_id != 2 && scene_id != 778 && scene_id != 779) {
    return (
      <>
        <Container id="scene-cont">
          <Container id="graphic-cont">
            <Graphic path={graphic_path} />
          </Container>

          <Container id="prompt-cont">
            <PromptTextBox sceneId={scene_id} prompt={scene_prompt} />
          </Container>

          <Container id="buttons-cont">
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
          </Container>

          <GuessButton onLastScene={handleLastScene} />
          <CharactersTab characters={characters} />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container id="scene-cont">
          <Container id="graphic-cont">
            <Graphic path={graphic_path} />
          </Container>

          <Container id="prompt-cont">
            <PromptTextBox sceneId={scene_id} prompt={scene_prompt} />
          </Container>

          <Container id="buttons-cont">
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
          </Container>
        </Container>
      </>
    );
  }
}
