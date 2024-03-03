const { Matches } = require("../models");

/**Create matches detail */
const createMatches = async (reqBody) => {
  return Matches.create(reqBody);
};

/** Get matches list data */
const getMatchesList = async (req, res) => {
  return Matches.find().populate({
    path:"team",
    select:["team_name"]
  });
};

/** Get matches details by id*/
const getMatchesById = async (matchesId) => {
  return Matches.findById(matchesId);
};

/** matches details update by id */
const updateDetails = async (matchesId, updateBody) => {
  return Matches.findByIdAndUpdate(matchesId, { $set: updateBody });
};

/** Delete matches by id */
const deleteMatches = async (matchesId) => {
  return Matches.findByIdAndDelete(matchesId);
};

module.exports = {
  createMatches,
  getMatchesList,
  getMatchesById,
  updateDetails,
  deleteMatches
};
