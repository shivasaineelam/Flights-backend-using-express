const router = require("express").Router();
const { cityMiddleware } = require("../../middlewares");
const { cityController } = require("./../../controllers");

router.post(
  "/",
  cityMiddleware.validateCreateRequest,
  cityController.createCityController
);

router.delete("/:id", cityController.deleteCityController);
router.get("/", cityController.getAllCityController);
router.get("/:id", cityController.getByCityIdController);
router.put("/", cityController.updateCityController);
module.exports = router;
