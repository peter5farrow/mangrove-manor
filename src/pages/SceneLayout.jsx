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
import { Container, Row, Col } from "react-bootstrap";
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
      //resets all characters to not guilty
      const res = await axios.post("/api/allcharacters", {
        isGuilty: false,
      });
      if (res.data.success) {
        console.log("Characters reset");
        setGuiltyChar(null);
      }
    } else if (scene_id === 2) {
      //sets one random character to guilty
      const res = await axios.post("/api/characters", {
        characterId: lodash.random(1, 5),
      });
      if (res.data) {
        //gets guilty character with clues
        const res2 = await axios.get("/api/guiltychar");
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

  if (scene_id != 1 && scene_id != 2 && scene_id != 778 && scene_id != 779) {
    return (
      <>
        <Container id="scene-cont">
          <Container id="graphic-cont">
            <Graphic path={graphic_path} />
          </Container>

          <Container fluid id="prompt-cont">
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
