import Graphic from "../components/Graphic";
import PromptTextBox from "../components/PromptTextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import CluesTab from "../components/CluesTab";
import { useLoaderData } from "react-router-dom";

export default function SceneLayout() {
  // const { scenes } = useLoaderData();

  return (
    <>
      <Graphic />
      <PromptTextBox />
      <LeftButton />
      <RightButton />
      <CluesTab />
    </>
  );
}
