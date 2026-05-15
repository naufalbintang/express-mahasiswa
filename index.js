import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
