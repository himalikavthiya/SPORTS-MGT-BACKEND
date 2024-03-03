const mongoose = require("mongoose");

const matchesSchema = new mongoose.Schema(
  {
    match_date: {
      type: Date,
      default:null
    },
    venue:{
        type:String,
        trim:true
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: "team",
    },
  },
  {
    timestamps: true,
  }
);

const Matches = mongoose.model("matches", matchesSchema);
module.exports = Matches;
