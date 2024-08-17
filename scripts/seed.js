import { Scene, Character, Food, Job, Motive, db } from "../src/model.js";
import sceneData from "./data/scenes.json" assert { type: "json" };
import characterData from "./data/characters.json" assert { type: "json" };
import foodData from "./data/foods.json" assert { type: "json" };
import jobData from "./data/jobs.json" assert { type: "json" };
import motiveData from "./data/motives.json" assert { type: "json" };

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const scenesInDB = await Promise.all(
  sceneData.map((scene) => {
    const {
      scene_id,
      scene_name,
      scene_prompt,
      left_scene_name,
      left_scene_id,
      right_scene_name,
      right_scene_id,
      graphic_path,
    } = scene;

    const newScene = Scene.create({
      scene_id,
      scene_name,
      scene_prompt,
      left_scene_name,
      left_scene_id,
      right_scene_name,
      right_scene_id,
      graphic_path,
    });

    return newScene;
  })
);

const foodsInDB = await Promise.all(
  foodData.map((food) => {
    const { food_name, food_clue } = food;

    const newFood = Food.create({
      food_name,
      food_clue,
    });

    return newFood;
  })
);

const jobsInDB = await Promise.all(
  jobData.map((job) => {
    const { job_title, job_clue } = job;

    const newJob = Job.create({
      job_title,
      job_clue,
    });

    return newJob;
  })
);

const motivesInDB = await Promise.all(
  motiveData.map((motive) => {
    const { motive_name, motive_clue } = motive;

    const newMotive = Motive.create({
      motive_name,
      motive_clue,
    });

    return newMotive;
  })
);

const charactersInDB = await Promise.all(
  characterData.map((character) => {
    const {
      character_id,
      first_name,
      last_name,
      is_guilty,
      age,
      hair_color,
      fav_food,
      occupation,
      char_motive,
    } = character;

    const newChar = Character.create({
      character_id,
      first_name,
      last_name,
      is_guilty,
      age,
      hair_color,
      fav_food,
      occupation,
      char_motive,
    });

    return newChar;
  })
);
console.log(foodsInDB);
console.log(jobsInDB);
console.log(motivesInDB);
console.log(scenesInDB);
console.log(charactersInDB);

await db.close();
console.log("Finished seeding database!");
