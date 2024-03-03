const { galleryService } = require("../services");

/** create gallery detail*/
const createGallery = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.Images = req.file.filename;
    } else {
      throw new Error("image is required!");
    }
    const gallery = await galleryService.createGallery(reqBody);

    res.status(201).json({
      message: "gallery create successfully!",
      data: gallery,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Get gallery list */
const GalleryList = async (req, res) => {
  try {
    const getList = await galleryService.getGalleryList(req, res);
    res.status(200).json({
      message: "Get gallery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Delete gallery */
const deleteGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExists = await galleryService.getGalleryById(galleryId);
    if (!galleryExists) {
      throw new Error("gallery not found!");
    }

    await galleryService.deleteGallery(galleryId);

    res.status(200).json({
      message: "player delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** gallery details update by id */
const updateGallery = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    const galleryExists = await galleryService.getGalleryById(galleryId);
    if (!galleryExists) {
      throw new Error("gallery not found!");
    }
    await galleryService.updateDetails(galleryId, req.body);
    res.status(200).json({ message: "gallery details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGallery,
  GalleryList,
  updateGallery,
  deleteGallery,
};
