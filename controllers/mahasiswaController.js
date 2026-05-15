import { Mahasiswa, Prodi, Jurusan } from "../models/index.js";

const includeRelasi = {
  include: {
    model: Prodi,
    include: Jurusan,
  },
};

export const getAll = async (req, res) => {
  try {
    const data = await Mahasiswa.findAll(includeRelasi);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await Mahasiswa.findByPk(req.params.id, includeRelasi);
    if (!data)
      return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await Mahasiswa.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    await Mahasiswa.update(req.body, { where: { id: req.params.id } });
    const data = await Mahasiswa.findByPk(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Mahasiswa.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Mahasiswa berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
