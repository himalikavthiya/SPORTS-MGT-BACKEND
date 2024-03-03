const mongoose = require("mongoose");

const tournamnetsSchema = new mongoose.Schema(
  {
    tur_name: {
      type: String,
      trim: true,
    },
    start_date: {
        type:Date,
        default:null
    },
    end_date: {
        type:Date,
        default:null
    },
    match_result:{
        type:mongoose.Types.ObjectId,
        ref:"match_result"
    }
  },
  {
    timestamps: true,
  }
);

const Tournamnets = mongoose.model("tournamnets", tournamnetsSchema);
module.exports = Tournamnets;
