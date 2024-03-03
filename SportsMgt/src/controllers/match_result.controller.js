const { matchResultService } = require("../services");

/** create match_result */
const createMatchResult = async (req, res) => {
  try {
    const reqBody = req.body;
    const match_resultExist = await matchResultService.createMatch_result(reqBody);
    if (!match_resultExist) {
      throw new Error("match result already created");
    }

    res.status(201).json({
      success: true,
      message: "match result create successfully!",
      data: { match_resultExist },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get match_result list */
const getMatchResult = async (req, res) => {
  try {
    const getList = await matchResultService.getMatch_resultList(req, res);

    res.status(200).json({
      success: true,
      message: "Get match_result list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** match_result details update by id */
const updateMatchResult = async (req, res) => {
  try {
    const match_resultId = req.params.match_resultId;
    const match_resultExists = await matchResultService.getMatch_resultById(match_resultId);
    if (!match_resultExists) {
      throw new Error("match_result not found!");
    }
    await matchResultService.updateDetails(match_resultId, req.body);

    res.status(200).json({ message: "match_result details update successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Delete match_result */
const deleteMatchResult = async (req, res) => {
  try {
    const match_resultId = req.params.match_resultId;
    const match_resultExists = await matchResultService.getMatch_resultById(match_resultId);
    if (!match_resultExists) {
      throw new Error("match_result not found!");
    }
    await matchResultService.deleteMatch_result(match_resultId);

    res.status(200).json({
      success: true,
      message: "match delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createMatchResult,
    getMatchResult,
    updateMatchResult,
    deleteMatchResult,
};
