const mongoose = require('mongoose');

const calendrierScolaireSchema = new mongoose.Schema({
  anneeScolaire: {
    type: String,
    required: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  emploiDeTemps: {
    type: String, // URL of the image stored in Cloudinary
    required: true,
  },
});

const CalendrierScolaire = mongoose.model('CalendrierScolaire', calendrierScolaireSchema);

module.exports = CalendrierScolaire;
