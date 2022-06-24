import { getData } from "./db.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { getSon } from "./UsersSon.js";

const Father = getData.sequelizeClient.define(
  "tbl_userfather",
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
    tableName: "tbl_userfather",
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

Father.hasMany(getSon, {});

getSon.belongsTo(Father);

export const getFather = Father;
