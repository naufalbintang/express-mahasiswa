import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Jurusan = sequelize.define(
  "Jurusan",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: true },
);

export default Jurusan;