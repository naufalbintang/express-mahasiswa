import { Prodi, Jurusan } from "../models/index.js";

const includeRelasi = {
  include: Jurusan,
};

export const getAll = async (req, res) => {
  try {
    const data = await Prodi.findAll(includeRelasi);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const data = await Prodi.findByPk(req.params.id, includeRelasi);
    if (!data)
      return res.status(404).json({ message: "Prodi tidak ditemukan" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = await Prodi.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    await Prodi.update(req.body, { where: { id: req.params.id } });
    const data = await Prodi.findByPk(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await Prodi.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Prodi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
