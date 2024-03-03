const express = require("express");
const validate = require("../../middlewares/validate");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create-token",
  validate(tokenValidation.generateTokens),
  tokenController.generateToken
);

/** Verify token to get user details */
router.get("/verify-token", tokenController.verifyToken);

module.exports = router;
