const mongoose = require("mongoose");
const config = require("../config/config");
// const BASE_URL="http://localhost:8000/"
const gallerySchema = new mongoose.Schema(
  {
    Images: {
      type: String,
      trim: true,
    },
    sport_name:{
      type:String,
    },
    des:{
      type:String
    },
    tournamnets: {
      type: mongoose.Types.ObjectId,
      ref: "tournamnets",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, data) {
        if (data?.Images) {
          data.Images = `${config.base_url}images/${data.Images}`;
        }
      },
    },
  }
);

const Gallery = mongoose.model("gellery", gallerySchema);
module.exports = Gallery;
