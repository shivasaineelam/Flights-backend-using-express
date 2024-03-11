const express = require("express");

const { InfoController } = require("../../controllers");
const airplaneroutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

const router = express.Router();
router.use("/airplane", airplaneroutes);
router.use("/airport", airportRoutes);
router.get("/info", InfoController.info);
router.use("/city", cityRoutes);

module.exports = router;
