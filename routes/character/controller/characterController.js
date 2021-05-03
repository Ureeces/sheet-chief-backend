const Character = require("../model/Character");
const User = require("../../users/model/User");

module.exports = {
  getAllUserCharacters: async (req, res) => {
    const id = req.params.id;

    try {
      let allUserCharacters = await (await User.findById({ _id: id })).populate(
        "characterList"
      );

      res.status(200).json(allUserCharacters.characterList);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getCharacterByID: async (req, res) => {
    const id = req.params.id;
    try {
      let foundCharacter = await Character.findById({ _id: id });
      res.status(200).json(foundCharacter);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  createCharacter: async (req, res) => {
    let id = req.params.id;
    let characterName = req.body.characterName;
    let classLevel = req.body.classLevel;
    let playerName = req.body.playerName;
    let race = req.body.race;
    let alignment = req.body.alignment;
    let background = req.body.background;
    let strScore = req.body.strScore;
    let dexScore = req.body.dexScore;
    let conScore = req.body.conScore;
    let intScore = req.body.intScore;
    let wisScore = req.body.wisScore;
    let chaScore = req.body.chaScore;
    let maxHP = req.body.maxHP;
    let currHP = req.body.currHP;
    let speed = req.body.speed;
    let armorClass = req.body.armorClass;

    try {
      let foundUser = await User.findById({ _id: id });
      let newCharacter = await new Character({
        characterName: characterName,
        classLevel: classLevel,
        playerName: playerName,
        race: race,
        alignment: alignment,
        background: background,
        strScore: strScore,
        dexScore: dexScore,
        conScore: conScore,
        intScore: intScore,
        wisScore: wisScore,
        chaScore: chaScore,
        maxHP: maxHP,
        currHP: currHP,
        speed: speed,
        armorClass: armorClass,
      });

      let savedNewCharacter = await newCharacter.save();
      await foundUser.characterList.push(savedNewCharacter);
      await foundUser.save();
      res.status(200).json(savedNewCharacter);
    } catch (error) {
      console.log("Error!");
      res.status(500).json(error);
    }
  },

  editCharacter: async (req, res) => {
    let id = req.params.id;
    let characterName = req.body.characterName || "";
    let classLevel = req.body.classLevel || "";
    let playerName = req.body.playerName || "";
    let race = req.body.race || "";
    let alignment = req.body.alignment || "";
    let background = req.body.background || "";
    let strScore = req.body.strScore || "";
    let dexScore = req.body.dexScore || "";
    let conScore = req.body.conScore || "";
    let intScore = req.body.intScore || "";
    let wisScore = req.body.wisScore || "";
    let chaScore = req.body.chaScore || "";
    let maxHP = req.body.maxHP || "";
    let currHP = req.body.currHP || "";
    let speed = req.body.speed || "";
    let armorClass = req.body.armorClass || "";

    try {
    } catch (error) {}
  },

  deleteByID: async (req, res) => {
    const id = req.params.id;

    try {
      let deletedByID = await Character.findByIdAndRemove({ _id: id });

      res.status(200).json(deletedByID);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
