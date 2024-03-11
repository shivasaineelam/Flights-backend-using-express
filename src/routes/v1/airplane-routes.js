const router = require("express").Router();
const { airplaneMiddleware } = require("../../middlewares");
const { airplaneController } = require("./../../controllers");
router.post(
  "/",
  airplaneMiddleware.validateCreateRequest,
  airplaneController.createAirplane
);
router.delete("/:id", airplaneController.deleteAirplane);
router.get("/", airplaneController.getAllAirplane);
router.get("/:id", airplaneController.getByAirplaneId);
router.put("/", airplaneController.updateAirplane);
module.exports = router;
