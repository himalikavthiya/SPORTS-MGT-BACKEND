const mongoose = require("mongoose");

const foundersSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      trim: true
    },
    nationality: {
      type: String,
      trim: true,
    },
    phone_no: {
      tye: Number,
    },
    team: {
        type:mongoose.Types.ObjectId,
        ref:"team"
    },
  },
  {
    timestamps: true,
  }
);

const Founders = mongoose.model("founders", foundersSchema);
module.exports = Founders;
