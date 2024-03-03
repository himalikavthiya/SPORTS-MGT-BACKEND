
const { foundersService} = require("../services");

/** create founders */
const createFounders = async (req, res) => {
    try {
      const reqBody = req.body;
      const foundersExists = await foundersService.createfounder(reqBody);
      if (!foundersExists) {
        throw new Error("founders already created");
      }

      res.status(201).json({
        success: true,
        message: "founders create successfully!",
        data: { foundersExists }
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Get founders list */
  const getFoundersList = async (req, res) => {
    try {
           const getList = await foundersService.getfounderList(req,res);
  
      res.status(200).json({
        success: true,
        message: "Get founders list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Get founders details by id */
  const getFoundersDetails = async (req, res) => {
    try {
      const getDetails = await foundersService.getfounderById(req.params.foundersId);
      if (!getDetails) {
        throw new Error("foundersn details not found!");
      }

      res.status(200).json({
        success: true,
        message: "founders details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** founders details update by id */
  const updateDetails = async (req, res) => {
    try {
      const foundersId = req.params.foundersId;
      const foundersExists = await foundersService.getfounderById(foundersId);
      if (!foundersExists) {
        throw new Error("founders not found!");
      }

      await foundersService.updateDetails(foundersId, req.body);

      res
        .status(200)
        .json({ success: true, message: "founders details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete founders */
  const deleteFounders = async (req, res) => {
    try {
      const foundersId = req.params.foundersId;
      const foundersExists = await foundersService.getfounderById(foundersId);
      if (!foundersExists) {
        throw new Error("founders not found!");
      }

      await foundersService.deletefounder(foundersId);

      res.status(200).json({
        success: true,
        message: "founders details delete successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  module.exports = {
    createFounders,
    getFoundersList,
    getFoundersDetails,
    updateDetails,
    deleteFounders
  }