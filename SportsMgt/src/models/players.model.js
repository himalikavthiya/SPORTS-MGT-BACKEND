const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      trim: true,
    },
    dob: {
      type: String,
      trim: true,
    },
    country: {
        type: String
    },
    role: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Players = mongoose.model("players", playersSchema);
module.exports = Players