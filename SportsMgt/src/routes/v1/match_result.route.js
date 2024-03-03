const express = require("express");
const { matchresultController } = require("../../controllers");
const { matchResultValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Craete match_result data */
router.post("/create-match_result",
validate(matchResultValidation.createMatch_Result),
matchresultController.createMatchResult);

/** Get match_result list */
router.get("/match_result-list", matchresultController.getMatchResult);

/** match_result details update by id */
router.put("/update-match_result/:match_resultId", matchresultController.updateMatchResult);

/** Delete match_result */
router.delete("/delete-match_result/:match_resultId", matchresultController.deleteMatchResult);

module.exports = router;
