const {Team} = require("../models");

/**Create teams */
const createTeam = async (reqBody) => {
    return Team.create(reqBody);
  };

  /** Get team list */
const getTeamList = async (req,res) => {
    return Team.find().populate({
      path:"players",
      select:["full_name"]
    })
  };

  /** Get team details by id*/
const getTeamById = async (teamId) => {
  return Team.findById(teamId);
};

/** team details update by id */
const updateTeamDetails = async (teamId, updateBody) => {
  return Team.findByIdAndUpdate(teamId, { $set: updateBody });
};

/** Delete team */
const deleteTeam = async (teamId) => {
    return Team.findByIdAndDelete(teamId);
  };

  module.exports = {
    createTeam,
    getTeamList,
    getTeamById,
    updateTeamDetails,
    deleteTeam,
  };