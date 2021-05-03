const express = require("express");
const router = express.Router();
const userController = require("./controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Something here lol");
});

router.post("/sign-up", userController.signup);

router.post("/sign-in", userController.signin);

module.exports = router;
