const PetOwner = require('../models/PetOwner');

// Cria um nov@ don@ de pet (POST) -> DONE
const create = async (req, res) => {
  try {
    const newPetOwner = req.body;
    const createPetOwner = await PetOwner.create(newPetOwner);
    res.status(201).json({ message: "Dono(a) do pet criado com sucesso!", newPetOwner });
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Pega todos @s don@s de pet (GET)
const getAll = async (req, res) => {
  try {
    const petOwners = await PetOwner.find();
    res.status(200).json(petOwners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  create,
  getAll
};
