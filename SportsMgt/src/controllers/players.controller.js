const { playersService } = require("../services");

/** create players detail*/
const createPlayers = async (req, res) => {
  try {
    const reqBody = req.body;
    const players = await playersService.createPlayers(reqBody);

    res.status(201).json({
      message: "players create successfully!",
      data: players,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Get players list */
const getPlayersList = async (req, res) => {
  try {
    const getList = await playersService.getPlayersList(req, res);
    res.status(200).json({
      message: "Get players list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Delete players */
const deletePlayers = async (req, res) => {
  try {
    const playersId = req.params.playersId;
    const playersExists = await playersService.getPlayersById(playersId);
    if (!playersExists) {
      throw new Error("players not found!");
    }

    await playersService.deletePlayers(playersId);

    res.status(200).json({
      message: "player delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** players details update by id */
const updatePlayers = async (req, res) => {
  try {
    const playersId = req.params.playersId;
    const playersExists = await playersService.getPlayersById(playersId);
    if (!playersExists) {
      throw new Error("players not found!");
    }
    await playersService.updatePlayersDetails(playersId, req.body);
    res.status(200).json({ message: "players details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPlayers,
  getPlayersList,
  updatePlayers,
  deletePlayers,
};
