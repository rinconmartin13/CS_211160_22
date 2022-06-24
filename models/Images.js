import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const img = getData.sequelizeClient.define("tbl_images", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const getImg = img;
