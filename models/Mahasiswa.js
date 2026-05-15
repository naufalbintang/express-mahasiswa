import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Mahasiswa = sequelize.define(
  "Mahasiswa",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nama: { type: DataTypes.STRING, allowNull: false },
    nim: {type: DataTypes.STRING, allowNull: false},
    prodi_id: { type: DataTypes.INTEGER, allowNull: false },
  }, { timestamps: true },
);

export default Mahasiswa;
