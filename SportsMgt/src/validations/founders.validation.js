const Joi = require("joi");

/** create Founder */
const createFounders = {
  body: Joi.object().keys({
    full_name: Joi.string().required().trim(),
    nationality: Joi.string().required().trim()
  }),
};

module.exports = {
    createFounders,

  };