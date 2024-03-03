const { teamService } = require("../services");

/** create team */
const createTeam = async (req, res) => {
  try {
    const reqBody = req.body;
    const team = await teamService.createTeam(reqBody);

    res.status(201).json({
      success: true,
      message: "team create successfully!",
      data: team,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get team list */
const getTeamList = async (req, res) => {
  try {
    const getList = await teamService.getTeamList(req, res);
    res.status(200).json({
      success: true,
      message: "Get team list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** team details update by id */
const updateTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("team not found!");
    }

    await teamService.updateTeamDetails(teamId, req.body);

    res
      .status(200)
      .json({ success: true, message: "team details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete team */
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("team not found!");
    }

    await teamService.deleteTeam(teamId);

    res.status(200).json({
      success: true,
      message: "team details delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTeam,
  getTeamList,
  updateTeam,
  deleteTeam,
};
