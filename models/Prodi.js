import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Prodi = sequelize.define(
  "Prodi",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    jurusan_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: true },
);

export default Prodi;
