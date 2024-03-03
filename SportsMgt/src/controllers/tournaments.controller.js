const { tournamentService } = require("../services");

/** create tournament */
const createTournament = async (req, res) => {
  try {
    const reqBody = req.body;
    const tournamentEx = await tournamentService.getTournamentByName(
      reqBody.tur_name
    );
    if (tournamentEx) {
      throw new Error(
        `please add other ${tournamentEx.tur_name} name detail already created`
      );
    }
    const tournament = await tournamentService.createTournament(reqBody);

    res.status(201).json({
      message: "tournament create successfully!",
      data: tournament,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get tournament list */
const getTournamentList = async (req, res) => {
  try {
    const getList = await tournamentService.gettournamentList(req, res);
    res.status(200).json({
      message: "Get tournament list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** tournament details update by id */
const updateTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;
    const tournamentExists = await tournamentService.gettournamentById(
      tournamentId
    );
    if (!tournamentExists) {
      throw new Error("tournament not found!");
    }

    await tournamentService.updatetournamentDetails(tournamentId, req.body);

    res
      .status(200)
      .json({
        success: true,
        message: "tournament details update successfully!",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete tournament */
const deleteTournament = async (req, res) => {
  try {
    const tournamentId = req.params.tournamentId;
    const tournamentExists = await tournamentService.gettournamentById(
      tournamentId
    );
    if (!tournamentExists) {
      throw new Error("tournament not found!");
    }
    await tournamentService.deletetournament(tournamentId);

    res.status(200).json({
      success: true,
      message: "tournament details delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTournament,
  getTournamentList,
  updateTournament,
  deleteTournament,
};
