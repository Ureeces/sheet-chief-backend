const express = require("express");
const router = express.Router();
const characterController = require("./controller/characterController");

router.get(
  "/get-all-user-characters/:id",
  characterController.getAllUserCharacters
);

router.get("/get-character-by-id/:id", characterController.getCharacterByID);

router.post("/create-character/:id", characterController.createCharacter);

router.put("/edit-character/:id", characterController.editCharacter);

router.delete("/delete-by-id/:id", characterController.deleteByID);

module.exports = router;
