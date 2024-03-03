const { matchesService } = require("../services");

/** create matches */
const createMatches = async (req, res) => {
  try {
    const reqBody = req.body;
    const matchesExists = await matchesService.createMatches(reqBody);
    if (!matchesExists) {
      throw new Error("matches already created");
    }

    res.status(201).json({
      success: true,
      message: "matches create successfully!",
      data: { matchesExists },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get matches list */
const getMatches = async (req, res) => {
  try {
    const getList = await matchesService.getMatchesList(req, res);

    res.status(200).json({
      success: true,
      message: "Get matches list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** matches details update by id */
const updateMatchesDetails = async (req, res) => {
  try {
    const matchesId = req.params.matchesId;
    const matchesExists = await matchesService.getMatchesById(matchesId);
    if (!matchesExists) {
      throw new Error("matches not found!");
    }
    await matchesService.updateDetails(matchesId, req.body);

    res.status(200).json({ message: "matches details update successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Delete matches */
const deleteMatches = async (req, res) => {
  try {
    const matchesId = req.params.matchesId;
    const matchesExists = await matchesService.getMatchesById(matchesId);
    if (!matchesExists) {
      throw new Error("matches not found!");
    }
    await matchesService.deleteMatches(matchesId);

    res.status(200).json({
      success: true,
      message: "match delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMatches,
  getMatches,
  updateMatchesDetails,
  deleteMatches,
};
