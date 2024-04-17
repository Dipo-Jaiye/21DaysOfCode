const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const appRoutes = require("./appRoutes");

router.use(apiRoutes);
router.use(appRoutes);

module.exports = router;