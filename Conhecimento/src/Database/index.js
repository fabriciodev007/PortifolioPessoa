import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.js";
import User from "../app/models/user.js";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();