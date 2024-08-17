import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Character, Food, Job, Motive, Scene } from "./src/model.js";

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

//get all scenes TEST
app.get("/api/scenes", async (req, res) => {
  const allScenes = await Scene.findAll();
  res.json(allScenes);
});

//player name input
app.post("/api/player_name", async (req, res) => {
  const { name } = req.body;
  if (name) {
    req.session.name = name;
    res.send({ name: req.session.name });
  } else {
    res.send({ success: false });
  }
});

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

//set all characters to not guilty
app.post("/api/allcharacters", async (req, res) => {
  const { isGuilty } = req.body;
  const allCharacters = await Character.findAll();

  allCharacters.forEach((char) => {
    char.is_guilty = isGuilty;
    char.save();
  });
  res.send({ success: true });
});

//set one character to guilty
app.post("/api/characters", async (req, res) => {
  const { characterId } = req.body;
  const guiltyChar = await Character.findOne({
    where: {
      character_id: characterId,
    },
  });
  if (guiltyChar.is_guilty === false) {
    guiltyChar.is_guilty = true;
    await guiltyChar.save();

    res.json(guiltyChar);
  }
});

//get guilty character with clues
app.get("/api/guiltychar", async (req, res) => {
  const guiltyChar = await Character.findOne({
    attributes: [
      "first_name",
      "last_name",
      "is_guilty",
      "age",
      "hair_color",
      "fav_food",
      "occupation",
      "char_motive",
    ],
    include: [
      {
        model: Food,
        attributes: ["food_clue"],
      },
      {
        model: Job,
        attributes: ["job_clue"],
      },
      {
        model: Motive,
        attributes: ["motive_clue"],
      },
    ],
    where: {
      is_guilty: true,
    },
  });

  req.session.guiltyChar = guiltyChar;
  res.json(req.session.guiltyChar);
});

//get all clues for all characters
app.get("/api/allclues", async (req, res) => {
  const clues = await Character.findAll({
    attributes: ["fav_food"],
    include: [
      {
        model: Food,
        attributes: ["food_clue"],
      },
      {
        model: Job,
        attributes: ["job_clue"],
      },
    ],
  });
  res.json(clues);
});

//get food clue by character id
app.get("/api/food/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findOne({
    where: { character_id: character_id },
    include: [Food],
  });
  res.json(character.food.food_clue);
});

//get job clue by character id
app.get("/api/jobs/:character_id", async (req, res) => {
  const { character_id } = req.params;
  const character = await Character.findOne({
    where: { character_id: character_id },
    include: [Job],
  });
  res.json(character.job.job_clue);
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
