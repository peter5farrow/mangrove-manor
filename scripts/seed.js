import { Scene, Character, Food, Job, Country, db } from "../src/model.js";
import sceneData from "./data/scenes.json" assert { type: "json" };
import characterData from "./data/characters.json" assert { type: "json" };
import foodData from "./data/foods.json" assert { type: "json" };
import jobData from "./data/jobs.json" assert { type: "json" };
import countryData from "./data/countries.json" assert { type: "json" };

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

const countriesInDB = await Promise.all(
  countryData.map((country) => {
    const { country_name, country_clue } = country;

    const newCountry = Country.create({
      country_name,
      country_clue,
    });

    return newCountry;
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
      birthplace,
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
      birthplace,
    });

    return newChar;
  })
);

//for confirmation
console.log(foodsInDB);
console.log(jobsInDB);
console.log(countriesInDB);
console.log(charactersInDB);

await db.close();
console.log("Finished seeding database!");
