import prisma from "../config/database.js";

const includeRelasi = {
  include: { jurusan: true },
};

export const getAll = async (req, res) => {
  try {
    const data = await prisma.prodi.findMany(includeRelasi);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await prisma.prodi.findUnique({
      where: { id: Number(req.params.id) },
      ...includeRelasi,
    });
    if (!data)
      return res.status(404).json({ message: "Prodi tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await prisma.prodi.create({ data: req.body });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const data = await prisma.prodi.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await prisma.prodi.delete({ where: { id: Number(req.params.id) } });
    res.status(200).json({ message: "Prodi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
