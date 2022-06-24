import { getData } from "./db.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const Son = getData.sequelizeClient.define(
  "tbl_userson",
  {
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
    ap_father: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ap_mother: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tbl_userson",
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

export const getSon = Son;
