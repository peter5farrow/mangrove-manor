import Graphic from "../components/Graphic";
import TextBox from "../components/TextBox";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import { useLoaderData } from "react-router-dom";

export default function SceneLayout() {
  // const { scenes } = useLoaderData();

  return (
    <>
      <h1>Mangrove Manor</h1>
      <Graphic />
      <TextBox />
      <LeftButton />
      <RightButton />
    </>
  );
}
