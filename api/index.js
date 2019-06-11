const router = require("express").Router();
const campusesRouter = require("./campuses.js");

router.use("/campuses", campusesRouter);
// /campuses is the name of the route fo

module.exports = router;