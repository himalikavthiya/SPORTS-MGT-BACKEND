const express = require("express");
const { matchesController } = require("../../controllers");
const { matchesValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Craete matches data */
router.post("/create-matches",
validate(matchesValidation.createMatches),
    matchesController.createMatches);

/** Get matches list */
router.get("/matches-list", matchesController.getMatches);

/** matches details update by id */
router.put("/update-matches/:matchesId", matchesController.updateMatchesDetails);

/** Delete matches */
router.delete("/delete-matches/:matchesId", matchesController.deleteMatches);

module.exports = router;
