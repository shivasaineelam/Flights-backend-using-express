const router = require("express").Router();
const { airplaneController } = require("./../../controllers");
router.post("/", airplaneController.createairplane);
router.post("/delete", airplaneController.deleteairplane);
router.get("/getallairplane", airplaneController.getallairplane);
router.get("/getbypk", airplaneController.getbyairplaneid);
router.put("/updateairplane", airplaneController.updateAirplane);
module.exports = router;
