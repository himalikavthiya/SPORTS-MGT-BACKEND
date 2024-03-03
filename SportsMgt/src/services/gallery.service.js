const { Gellery } = require("../models");

/**Create gallerys */
const createGallery = async (reqBody) => {
  return Gellery.create(reqBody);
};

/** Get gallery list */
const getGalleryList = async (req, res) => {
  return Gellery.find().populate({
    path:"tournamnets",
    select:["tur_name"]
  });
};

/** Get gallery details by id*/
const getGalleryById = async (galleryId) => {
  return Gellery.findById(galleryId);
};

/** Delete gallery */
const deleteGallery = async (galleryId) => {
  return Gellery.findByIdAndDelete(galleryId);
};

/** gallery details update by id */
const updateDetails = async (galleryId, updateBody) => {
  return Gellery.findByIdAndUpdate(galleryId, { $set: updateBody });
};

module.exports = {
  createGallery,
  getGalleryList,
  getGalleryById,
  deleteGallery,
  updateDetails,
};
