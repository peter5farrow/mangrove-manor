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
import GuessPage from "./pages/GuessPage.jsx";
import { GuiltyCharProvider } from "./contexts/GuiltyCharContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="/scene/:sceneId"
        element={<SceneLayout />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/scenes/${params.sceneId}`);
          const res2 = await axios.get("/api/characters");
          return { scene: res.data, characters: res2.data };
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
    <GuiltyCharProvider>
      <RouterProvider router={router} />
    </GuiltyCharProvider>
  </React.StrictMode>
);
