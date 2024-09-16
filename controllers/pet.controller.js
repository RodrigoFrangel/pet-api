import Pet from '../models/Pet.js';

// Cria um novo pet (POST)
const create = async (req, res) => {
  try {
    const createPet = await Pet.create(req.body);
    res.status(201).json({ message: 'Pet criado com sucesso!', createPet });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Pega todos os pets (GET)
const getAll = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deleta todos os pets (DELETE)
const deleteAll = async (req, res) => {
  try {
    const deletePets = await Pet.deleteMany();
    res.json({ message: `Foram removidos ${deletePets.deletedCount} pets.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Pega um pet pelo ID (GET)
const getById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualiza um pet pelo ID (PUT)
const updateById = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deleta um pet pelo ID (DELETE)
const deleteById = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  create,
  getAll,
  deleteAll,
  getById,
  updateById,
  deleteById,
};
