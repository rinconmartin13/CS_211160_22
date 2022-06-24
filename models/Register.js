import { getData } from "./db.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import { getFather } from "./UsersFather.js";

const Register = getData.sequelizeClient.define(
  "tbl_register",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tbl_register",
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

Register.hasMany(getFather, {});

getFather.belongsTo(Register);

export const getRegister = Register;
