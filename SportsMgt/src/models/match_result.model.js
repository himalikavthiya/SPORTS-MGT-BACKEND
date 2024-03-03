const mongoose = require("mongoose");

const match_resultSchema = new mongoose.Schema(
  {
    matches: {
        type: mongoose.Types.ObjectId,
        ref: "matches",
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

const Match_Result = mongoose.model("match_result", match_resultSchema);
module.exports = Match_Result;
