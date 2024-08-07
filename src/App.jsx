import { Outlet } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import "./App.css";

function App() {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
}

export default App;
