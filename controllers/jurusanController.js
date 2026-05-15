import prisma from "../config/database.js";

export const getAll = async (req, res) => {
  try {
    const data = await prisma.jurusan.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await prisma.jurusan.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!data)
      return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await prisma.jurusan.create({ data: req.body });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const data = await prisma.jurusan.update({
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
    await prisma.jurusan.delete({ where: { id: Number(req.params.id) } });
    res.status(200).json({ message: "Jurusan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
