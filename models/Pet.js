const mongoose = require('mongoose');

const Pet = mongoose.model('Pet', {
  name: { type: String, required: true },
  species: { type: String },
  age: { type: Number },
  entryDate: { type: Date, default: Date.now },
  petOwner: { type: mongoose.Types.ObjectId, ref: 'PetOwner' },  // Referência ao dono
  nicknames: [String]  // Array de apelidos
});

module.exports = Pet;
