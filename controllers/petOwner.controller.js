import PetOwner from '../models/PetOwner.js';

// Cria um nov@ don@ de pet (POST)
const create = async (req, res) => {
  try {
    const createPetOwner = await PetOwner.create(req.body);
    res.status(201).json({ message: 'Dono(a) do pet criado com sucesso!', createPetOwner });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Pega todos @s don@s de pet (GET)
const getAll = async (req, res) => {
  try {
    const petOwners = await PetOwner.find();
    res.status(200).json(petOwners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualiza um(a) dono(a) de pet pelo ID (PUT)
const updateById = async (req, res) => {
  try {
    const updatedPetOwner = await PetOwner
      .findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPetOwner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Pega um(a) dono(a) de pet pelo ID (GET)
const getById = async (req, res) => {
  try {
    const petOwner = await PetOwner.findById(req.params.id);
    res.status(200).json(petOwner);
  } catch (error) {
    res.status().json({ message: error.message });
  }
};

// Deleta um(a) dono(a) de pet pelo ID (DELETE)
const deleteById = async (req, res) => {
  try {
    await PetOwner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pessoa removida com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  create,
  getAll,
  updateById,
  getById,
  deleteById,
};
