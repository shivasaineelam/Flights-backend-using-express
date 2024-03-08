const airplane = require("../models/airplane");
const { airplaneRepository } = require("./../repositories");

const airplanerepository = new airplaneRepository(airplane);

const airplaneservice = async (data) => {
  const response = await airplanerepository.createairplane(data);
  return response;
};
module.exports = { airplaneservice };
