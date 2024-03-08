const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneroutes = require("./airplane-routes");

const router = express.Router();
router.use("/airplane", airplaneroutes);
router.get("/info", InfoController.info);

module.exports = router;
