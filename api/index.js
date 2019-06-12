const router = require("express").Router();
const campusesRouter = require("./campuses.js");
const studentsRouter = require("./students.js");

router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);

module.exports = router;