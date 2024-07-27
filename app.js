import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Character, Food, Scene } from "./src/model.js";

const app = express();
const port = "8000";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

//ROUTES

//get all scenes DEMO
app.get("/api/scenes", async (req, res) => {
  const allScenes = await Scene.findAll();
  res.json(allScenes);
});

//get one scene by id
app.get("/api/scenes/:scene_id", async (req, res) => {
  const { scene_id } = req.params;
  const scene = await Scene.findByPk(scene_id);
  res.json(scene);
});

//get one character by id
app.get("/api/characters/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findByPk(character_id);
  res.json(character);
});

//get food by character id
app.get("/api/food/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findByPk(character_id);
  const food = await Food.findOne({
    where: {
      food_name: character.fav_food,
    },
  });
  res.json(food);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
