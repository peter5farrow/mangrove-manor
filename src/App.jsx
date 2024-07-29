import { useNavigate, NavLink, Outlet } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  );
}

export default App;
