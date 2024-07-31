import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import SceneLayout from "./pages/SceneLayout.jsx";
import SceneData from "../scripts/data/scenes.json";
import GuessPage from "./pages/GuessPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="/scene/:sceneId"
        element={<SceneLayout />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/scenes/${params.sceneId}`);
          // console.log(res.data);
          return { scene: res.data };
        }}
      />
      <Route
        path="/guess"
        element={<GuessPage />}
        loader={async () => {
          const res = await axios.get("/api/characters");
          return { characters: res.data };
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
