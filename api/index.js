const router = require("express").Router();
const campusesRouter = require("./campuses.js");

router.use("/campuses", campusesRouter);

module.exports = router;