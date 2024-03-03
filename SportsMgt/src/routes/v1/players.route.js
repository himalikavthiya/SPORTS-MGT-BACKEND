const express = require("express");
const { playersController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { playersValidation } = require("../../validations");

const router = express.Router();

/**Craete players data */
router.post("/createplayer",
validate(playersValidation.createPlayers),
playersController.createPlayers);

/** Get players list */
router.get("/playerlist", playersController.getPlayersList);

/** Delete players */
router.delete("/delete-player/:playersId", playersController.deletePlayers);

/** players details update by id */
router.put("/update-player/:playersId", playersController.updatePlayers);

module.exports = router;
