const { Match_Result } = require("../models");

/**Create match_results */
const createMatch_result = async (reqBody) => {
  return Match_Result.create(reqBody);
};

/** Get match_result list */
const getMatch_resultList = async (req, res) => {
  return Match_Result.find().populate({
    path:"matches",
    select:["match_date"]
  })
};

/** Get match_result details by id*/
const getMatch_resultById = async (match_resultId) => {
  return Match_Result.findById(match_resultId);
};

/** match_result details update by id */
const updateDetails = async (match_resultId, updateBody) => {
  return Match_Result.findByIdAndUpdate(match_resultId, { $set: updateBody });
};

/** Delete match_result */
const deleteMatch_result = async (match_resultId) => {
  return Match_Result.findByIdAndDelete(match_resultId);
};

module.exports = {
  createMatch_result,
  getMatch_resultList,
  getMatch_resultById,
  updateDetails,
  deleteMatch_result
};
