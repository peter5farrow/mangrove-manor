import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";

export const db = await connectToDB(
  "postgresql://postgres:postgres@/mangrove-manor"
);

export class Scene extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Scene.init(
  {
    scene_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    scene_name: {
      type: DataTypes.STRING,
    },
    scene_prompt: {
      type: DataTypes.TEXT,
    },
    left_scene_name: {
      type: DataTypes.STRING,
    },
    left_scene_id: {
      type: DataTypes.INTEGER,
    },
    right_scene_name: {
      type: DataTypes.STRING,
    },
    right_scene_id: {
      type: DataTypes.INTEGER,
    },
    graphic_path: {
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: "scene",
    sequelize: db,
  }
);

export class Food extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Food.init(
  {
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    food_clue: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "food",
    sequelize: db,
  }
);

export class Job extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Job.init(
  {
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    job_clue: {
      type: DataTypes.TEXT,
    },
  },
  {
    modelName: "job",
    sequelize: db,
  }
);

export class Character extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Character.init(
  {
    character_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_guilty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    hair_color: {
      type: DataTypes.STRING,
    },
    fav_food: {
      type: DataTypes.STRING,
      references: {
        model: "food",
        key: "food_name",
      },
    },
    occupation: {
      type: DataTypes.STRING,
      references: {
        model: "jobs",
        key: "job_title",
      },
    },
  },
  {
    modelName: "character",
    sequelize: db,
  }
);

// Food.hasMany(Character, { foreignKey: "fav_food" });
// Character.belongsTo(Food, { foreignKey: "fav_food" });

// Job.hasMany(Character, { foreignKey: "job_title" });
// Character.belongsTo(Job, { foreignKey: "job_title" });

Character.belongsTo(Food, {
  foreignKey: "fav_food",
  targetKey: "food_name",
  as: "favorite_food",
});
Character.belongsTo(Job, {
  foreignKey: "occupation",
  targetKey: "job_title",
  as: "job",
});
