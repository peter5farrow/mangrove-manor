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
    sceneName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    textBox: {
      type: DataTypes.TEXT,
    },
    leftButton: {
      type: DataTypes.STRING,
    },
    rightButton: {
      type: DataTypes.STRING,
    },
    graphicPath: {
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
    favFood: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    foodClue: {
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
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    jobClue: {
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
    characterId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isGuilty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    hairColor: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "character",
    sequelize: db,
  }
);

Food.hasMany(Character, { foreignKey: "favFood" });
Character.belongsTo(Food, { foreignKey: "favFood" });

Job.hasMany(Character, { foreignKey: "jobTitle" });
Character.belongsTo(Job, { foreignKey: "jobTitle" });
