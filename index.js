import express from "express";
import "dotenv/config";
import { sequelize } from "./models/index.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database terhubung");

    await sequelize.sync({ alter: true });
    console.log("Tabel tersinkronisasi");

    app.listen(PORT, () =>
      console.log(`Server jalan di http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error("Gagal koneksi ke database", error.message);
    process.exit();
  }
};

start();