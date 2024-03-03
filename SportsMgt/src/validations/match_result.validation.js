const Joi = require("joi");

/** create match result */
const createMatch_Result = {
  body: Joi.object().keys({
    matches: Joi.string().required().trim(),
    players: Joi.string().required().trim()
  }),
};

module.exports = {
    createMatch_Result
  };