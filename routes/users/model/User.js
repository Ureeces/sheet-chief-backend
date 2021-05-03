const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    default: "",
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
    default: "",
  },

  characterList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],

  password: { type: String, default: "" },
});

module.exports = mongoose.model("User", UserSchema);
