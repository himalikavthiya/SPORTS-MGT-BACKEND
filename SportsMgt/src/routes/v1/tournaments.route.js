const express = require("express");
const { tournamentsController } = require("../../controllers");
const { tournamentValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Craete tournaments data */
router.post("/create-tournaments",
validate(tournamentValidation.createTournamet),
    tournamentsController.createTournament);

/** Get tournaments list */
router.get("/tournaments-list", tournamentsController.getTournamentList);

/** tournaments details update by id */
router.put("/update-tournaments/:tournamentsId", tournamentsController.updateTournament);

/** Delete tournaments */
router.delete("/delete-tournaments/:tournamentsId", tournamentsController.deleteTournament);

module.exports = router;
