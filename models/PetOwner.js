import mongoose from 'mongoose';

const PetOwner = mongoose.model('PetOwner', {
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  pets: [{ type: mongoose.Types.ObjectId, ref: 'Pet' }], // Array de pets referenciados
});

export default PetOwner;
