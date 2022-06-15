import { getData } from "./db.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = getData.sequelizeClient.define(
  "tbl_usersdb",
  {
    // id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true},
    // username: Sequelize.STRING,
    // email: Sequelize.STRING,
    // password: Sequelize.STRING,
    // phone_number: Sequelize.STRING,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: "This user is already busy",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: DataTypes.STRING,
  },
  {
    tableName: "tbl_usersdb",
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    hooks: {
      beforeCreate: (user, options) => {
        {
          user.password =
            user.password && user.password != ""
              ? bcrypt.hashSync(user.password, 10)
              : "";
        }
      },
    },
  }
);

export const getUser = User;
