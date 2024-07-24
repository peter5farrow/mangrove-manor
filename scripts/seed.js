import { Scene, Character, Food, Job, db } from "../src/model.js";
import sceneData from "./data/scenes.json" assert { type: "json" };
import characterData from "./data/characters.json" assert { type: "json" };
import foodData from "./data/foods.json" assert { type: "json" };
import jobData from "./data/jobs.json" assert { type: "json" };
import lodash from "lodash";

console.log("Syncing database...");
await db.sync({ force: true });

console.log("Seeding database...");

const scenesInDB = await Promise.all(
  sceneData.map((scene) => {
    const { sceneName, textBox, leftButton, rightButton, graphicPath } = scene;

    const newScene = Scene.create({
      sceneName,
      textBox,
      leftButton,
      rightButton,
      graphicPath,
    });

    return newScene;
  })
);

const foodsInDB = await Promise.all(
  foodData.map((food) => {
    const { favFood, foodClue } = food;

    const newFood = Food.create({
      favFood,
      foodClue,
    });

    return newFood;
  })
);

const jobsInDB = await Promise.all(
  jobData.map((job) => {
    const { jobTitle, jobClue } = job;

    const newJob = Job.create({
      jobTitle,
      jobClue,
    });

    return newJob;
  })
);
const charactersInDB = await Promise.all(
  characterData.map((character) => {
    const { firstName, lastName, age, hairColor, favFood, jobTitle } =
      character;

    const newChar = Character.create({
      firstName,
      lastName,
      age,
      hairColor,
      favFood,
      jobTitle,
    });

    return newChar;
  })
);
console.log(foodsInDB);
console.log(jobsInDB);
console.log(charactersInDB);
console.log(scenesInDB);

await db.close();
console.log("Finished seeding database!");
