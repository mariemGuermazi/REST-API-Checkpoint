const express = require("express");
const {getAllUsers, addUser, editUserById, removeUserById} = require("../controllers/usersControllers")
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/add", addUser);
router.put("/editUser/:id", editUserById);
router.delete("/removeUser/:id", removeUserById);

module.exports = router;