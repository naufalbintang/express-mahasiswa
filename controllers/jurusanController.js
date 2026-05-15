import { Jurusan, Mahasiswa } from "../models/index.js";

export const getAll = async (req, res) => {
  try {
    const data = await Jurusan.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await Jurusan.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Jurusan tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await Jurusan.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    await Jurusan.update(req.body, { where: { id: req.params.id } });
    const data = await Jurusan.findByPk(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Jurusan.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Jurusan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
