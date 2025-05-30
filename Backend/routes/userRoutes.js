const express = require("express");
const router = express.Router();

const { 
  getAllUsers, 
  getUserById, 
  createUser,
  updateUser,
  registerUser  
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);

router.post("/register", registerUser);

module.exports = router;
