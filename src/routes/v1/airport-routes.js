const router = require("express").Router();
const { airportMiddleware } = require("../../middlewares");
const { airportController } = require("./../../controllers");

router.post(
  "/",
  airportMiddleware.validateCreateRequest,
  airportController.createAirport
);
router.delete("/:id", airportController.deleteAirport);
router.get("/", airportController.getAllAirport);
router.get("/:id", airportController.getByAirportId);
router.put("/", airportController.updateAirport);
module.exports = router;
