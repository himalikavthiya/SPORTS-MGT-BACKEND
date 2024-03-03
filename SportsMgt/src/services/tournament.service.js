const {Tournaments} = require("../models");

/**Create tournaments */
const createTournament = async (reqBody) => {
    return Tournaments.create(reqBody);
  };

  /** Get tournament list */
const getTournamentList = async (req,res) => {
    return Tournaments.find()
  };

  /** Get tournament details by id*/
const getTournamentById = async (tournamentId) => {
  return Tournaments.findById(tournamentId);
};

/** tournament details update by id */
const getTournamentByName = async (tur_name) => {
    return Tournaments.findOne({ tur_name }).populate("match_result");
  };

/** tournament details update by id */
const updateTournamentDetails = async (tournamentId, updateBody) => {
  return Tournaments.findByIdAndUpdate(tournamentId, { $set: updateBody });
};

/** Delete tournament */
const deleteTournament = async (tournamentId) => {
    return Tournaments.findByIdAndDelete(tournamentId);
  };

  module.exports = {
    createTournament,
    getTournamentList,
    getTournamentById,
    updateTournamentDetails,
    deleteTournament,
    getTournamentByName
  };