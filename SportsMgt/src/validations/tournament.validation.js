const Joi = require("joi");

/** create tournament */
const createTournamet = {
  body: Joi.object().keys({
    tur_name: Joi.string().required().trim(),
    match_result: Joi.string().required().trim()
  }),
};

module.exports = {
    createTournamet,
  };