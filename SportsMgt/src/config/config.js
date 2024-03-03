const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env"});
const envVarsSchema = joi
  .object({
    BASE_URL: joi.string().trim().description("Base URL")
  })

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);


module.exports = {
    base_url: envVars.BASE_URL,
}