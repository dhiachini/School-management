const express = require("express");
const {
  createFrais,
  getAllFrais,
  getFraisById,
  updateFrais,
  deleteFrais,
} = require("../controllers/frais.controller");
const auth = require("../middleware/authentification");

const router = express.Router();

// Routes
router.post("/", auth, createFrais);
router.get("/", getAllFrais);
router.get("/:id", getFraisById);
router.put("/:id", auth, updateFrais);
router.delete("/:id", auth, deleteFrais);

module.exports = router;
