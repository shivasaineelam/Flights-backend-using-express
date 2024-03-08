const { airplane } = require("../models/airplane");
const { airplaneRepository } = require("./../repositories");

const airplanerepository = new airplaneRepository(airplane);

const airplanecreateservice = async (data) => {
  const response = await airplanerepository.createairplane(data);
  return response;
};
const aiplanedelteservice = async (data) => {
  const response = await airplanerepository.destroy(data);
  return response;
};
const getallairplaneservice = async (data) => {
  const response = await airplanerepository.getall();
  return response;
};
const getairplanebyidservice = async (data) => {
  const response = await airplanerepository.get(data);
  return response;
};
const updateAirplaneService = async (data, id) => {
  console.log(data, id);
  const response = await airplanerepository.update(data, id);
  return response;
};
module.exports = {
  airplanecreateservice,
  aiplanedelteservice,
  getallairplaneservice,
  getairplanebyidservice,
  updateAirplaneService,
};
