const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  characterName: { type: String, default: "" },
  classLevel: { type: String, default: "" },
  playerName: { type: String, default: "" },
  race: { type: String, default: "" },
  alignment: { type: String, default: "" },
  background: { type: String, default: "" },
  strScore: { type: String, default: "" },
  dexScore: { type: String, default: "" },
  conScore: { type: String, default: "" },
  intScore: { type: String, default: "" },
  wisScore: { type: String, default: "" },
  chaScore: { type: String, default: "" },
  maxHP: { type: String, default: "" },
  currHP: { type: String, default: "" },
  speed: { type: String, default: "" },
  armorClass: { type: String, default: "" },
});

module.exports = mongoose.model("Character", CharacterSchema);
