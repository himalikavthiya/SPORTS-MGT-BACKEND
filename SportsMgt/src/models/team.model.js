const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_name: {
        type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    players: {
      type: mongoose.Types.ObjectId,
      ref: "players",
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("team", teamSchema);
module.exports = Team;
