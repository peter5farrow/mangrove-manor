import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Character, Food, Job, Scene } from "./src/model.js";

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

//player name input
app.post("/api/player_name", async (req, res) => {
  const { name } = req.body;
  if (name) {
    req.session.name = name;
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

//get player name
// app.get("/api/player_name", async (req, res) => {
//   const playerName = req.session.name;
//   res.send({ name: playerName });
// });

//get scene by id
app.get("/api/scenes/:scene_id", async (req, res) => {
  const { scene_id } = req.params;
  const scene = await Scene.findByPk(scene_id);
  res.json(scene);
});

//get all characters
app.get("/api/characters", async (req, res) => {
  const characters = await Character.findAll();
  res.json(characters);
});

//get one character by id
app.get("/api/characters/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findByPk(character_id);
  res.json(character);
});

//reset all characters to not guilty, then set random character to guilty
// app.post("/api/characters", async (req, res) => {
//   const { is_guilty } = req.body;

//   const allCharacters = await Character.findAll();

//   for (const character of allCharacters) {
//     if (character.is_guilty === true) {
//       character.set({
//         is_guilty: false,
//       });
//       await character.save();
//     }
//   }

//   const guiltyChar = await Character.findByPk(
//     lodash.random(1, 5 /* number of characters */)
//   );
//   guiltyChar.set({
//     is_guilty: is_guilty,
//   });
//   await guiltyChar.save();

//   res.json(guiltyChar);
//   console.log(guiltyChar);
// });

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

//get job by character id
app.get("/api/jobs/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findByPk(character_id);
  const job = await Job.findOne({
    where: {
      job_title: character.occupation,
    },
  });
  res.json(job);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
