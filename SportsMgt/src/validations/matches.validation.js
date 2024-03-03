const Joi = require("joi");

/** create Matches */
const createMatches = {
  body: Joi.object().keys({
    venue: Joi.string().required().trim(),
    team: Joi.string().required().trim()
  }),
};

module.exports = {
    createMatches,

  };