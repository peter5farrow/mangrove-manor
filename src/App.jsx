import { useNavigate, NavLink, Outlet } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import SceneLayout from "./pages/SceneLayout";
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
