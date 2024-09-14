const Pet = require('../models/Pet');

// Cria um novo pet (POST) -> DONE
const create = async (req, res) => {
  try {
    const newPet = req.body;
    const createPet = await Pet.create(newPet);
    res.status(201).json({ message: "Pet criado com sucesso!", newPet });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Pega todos os pets (GET)
const getAll = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Deleta todos os pets (DELETE)
const deleteAll = async (req, res) => {
  try {
    const deletePets = await Pet.deleteMany();
    res.json({ message: `Foram removidos ${deletePets.deletedCount} pets.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Pega um pet pelo ID (GET)
const getById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Atualiza um pet pelo ID (PUT)
const updateById = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Deleta um pet pelo ID (DELETE)
const deleteById = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  create,
  getAll,
  deleteAll,
  getById,
  updateById,
  deleteById
};
