const router = require("express").Router();
const { airplaneController } = require("./../../controllers");
router.post("/", airplaneController.createairplane);
module.exports = router;
