const Joi = require("joi");

/** Create jsonwebroken  */
const generateTokens = {
  body: Joi.object({
    players: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateTokens,
};
