const mongoose = require('mongoose');

const Pet = mongoose.model('Pet', {
  name: String,
  species: String,
  age: Number,
});

module.exports = Pet;
