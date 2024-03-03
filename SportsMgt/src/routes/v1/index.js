const express = require('express');
const foundersRoute = require("./founders.route");
const tournamentsRoute = require("./tournaments.route");
const gelleryRoute = require("./gallery.route");
const matchesRoute = require("./matches.route");
const playersRoute = require("./players.route");
const teamRoute = require("./team.route");
const resultRoute = require("./match_result.route");
const tokenRoute = require("./token.route");

const router = express.Router();

/**Create particular routes */
router.use('/founders',foundersRoute);
router.use('/tournamnet',tournamentsRoute);
router.use('/gellery',gelleryRoute);
router.use('/matches',matchesRoute);
router.use('/players',playersRoute);
router.use('/team',teamRoute);
router.use('/result',resultRoute);
router.use('/token',tokenRoute);


module.exports = router;
