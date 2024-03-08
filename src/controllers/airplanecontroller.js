const { airplaneservice } = require("./../services");
const { StatusCodes } = require("http-status-codes");
const createairplane = async (req, res) => {
  try {
    const response = await airplaneservice.airplanecreateservice({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.send({ data: response }).status(StatusCodes.CREATED);
  } catch (error) {
    throw error;
  }
};
const deleteairplane = async (req, res) => {
  try {
    const response = await airplaneservice.aiplanedelteservice(req.body.id);
    res.send({ sucess: true, response: response });
  } catch (error) {
    throw error;
  }
};
const getallairplane = async (req, res) => {
  try {
    const response = await airplaneservice.getallairplaneservice();
    res.send({ sucess: true, response: response });
  } catch (error) {
    throw error;
  }
};
const getbyairplaneid = async (req, res) => {
  try {
    const response = await airplaneservice.getairplanebyidservice(req.body.id);
    res.send({ sucess: true, response: response });
  } catch (error) {
    throw error;
  }
};
const updateAirplane = async (req, res) => {
  try {
    const response = await airplaneservice.updateAirplaneService(
      req.body.data,
      req.body.id
    );
    res.send({ success: true, response: response });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createairplane,
  deleteairplane,
  getallairplane,
  getbyairplaneid,
  updateAirplane,
};
