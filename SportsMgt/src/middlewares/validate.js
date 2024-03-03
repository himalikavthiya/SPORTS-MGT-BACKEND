const pick = require("../helpers/pick");
const Joi = require("joi");


const validate = (schema) => (req, res, next) => {
    const { value, error } = Joi.compile(pick(req, Object.keys(pick(schema, ["params", "query", "body"]))))
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate();

    if (error) return next(new Error(error.details.map((d) => d.message).join(", ")));
    Object.assign(req, value);
    return next();
  };

module.exports = validate;
