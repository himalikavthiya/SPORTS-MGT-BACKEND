const {Players} = require("../models");


/**Create player details */
const createPlayers = async (reqBody) => {
    return Players.create(reqBody);
  };

  /** Get players list */
const getPlayersList = async (req,res) => {
    return Players.find().count();
  };

  /** Get players details by id*/
const getPlayersById = async (playersId) => {
  return Players.findById(playersId);
};

/** players details update by id */
const updatePlayersDetails = async (playersId, updateBody) => {
  return Players.findByIdAndUpdate(playersId, { $set: updateBody });
};

/** Delete players */
const deletePlayers = async (playersId) => {
    return Players.findByIdAndDelete(playersId);
  };

  module.exports = {
    createPlayers,
    getPlayersList,
    getPlayersById,
    updatePlayersDetails,
    deletePlayers
  };