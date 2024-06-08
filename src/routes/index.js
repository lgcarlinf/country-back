const { Router } = require("express");

const activityRouter = require("./activity");
const countriesRouter = require("./countries");

const router = Router({ mergeParams: true });

router.use("/activity", activityRouter);
router.use("/countries", countriesRouter);











module.exports = router;
