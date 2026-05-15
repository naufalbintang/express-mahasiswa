import prisma from "../config/database.js";

const includeRelasi = {
  include: {
    prodi: {
      include: { jurusan: true },
    },
  },
};

export const getAll = async (req, res) => {
  try {
    const data = await prisma.mahasiswa.findMany(includeRelasi);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await prisma.mahasiswa.findUnique({
      where: { id: Number(req.params.id) },
      ...includeRelasi,
    });
    if (!data)
      return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await prisma.mahasiswa.create({ data: req.body });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const data = await prisma.mahasiswa.update({
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
    await prisma.mahasiswa.delete({ where: { id: Number(req.params.id) } });
    res.status(200).json({ message: "Mahasiswa berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
