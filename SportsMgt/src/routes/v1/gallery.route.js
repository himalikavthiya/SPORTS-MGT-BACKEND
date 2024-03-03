const express = require("express");
const { galleryController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**Craete gallerys data */
router.post("/creategallery",
upload.single("Images"),
galleryController.createGallery);

/** Get gallerys list */
router.get("/gallerylist", galleryController.GalleryList);

/** Delete gallerys */
router.delete("/delete-gallery/:gallerysId", galleryController.deleteGallery);

/** gallerys details update by id */
router.put("/update-gallery/:gallerysId", galleryController.updateGallery);

module.exports = router;
