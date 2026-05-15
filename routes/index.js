import { Router } from "express";
import jurusanRouters from "./jurusan.js";
import prodiRouters from "./prodi.js";
import mahasiswaRouters from "./mahasiswa.js";

const router = Router();

router.use("/jurusan", jurusanRouters);
router.use("/prodi", prodiRouters);
router.use("/mahasiswa", mahasiswaRouters);

export default router;