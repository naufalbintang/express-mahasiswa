import sequelize from "../config/database.js";
import Jurusan from "./Jurusan.js";
import Prodi from "./Prodi.js";
import Mahasiswa from "./Mahasiswa.js";

//relasi
Jurusan.hasMany(Prodi, { foreignKey: "jurusan_id", onDelete: "CASCADE" });
Prodi.belongsTo(Jurusan, { foreignKey: "jurusan_id" });

Prodi.hasMany(Mahasiswa, { foreignKey: "prodi_id", onDelete: "CASCADE" });
Mahasiswa.belongsTo(Prodi, { foreignKey: "prodi_id" });

export { sequelize, Jurusan, Prodi, Mahasiswa };