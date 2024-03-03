const Joi = require("joi");

/** create players details key */
const createPlayers = {
  body: Joi.object().keys({
    full_name: Joi.string().required().trim(),
    role: Joi.array().required()
  }),
};

module.exports = {
    createPlayers
  };