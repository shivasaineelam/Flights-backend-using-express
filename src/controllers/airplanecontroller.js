const { airplaneservice } = require("./../services");
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("./../utils/response/");

const createAirplane = async (req, res) => {
  try {
    const response = await airplaneservice.ariplaneCreateService({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
};

const deleteAirplane = async (req, res) => {
  try {
    const response = await airplaneservice.airplaneDeleteService(req.params.id);
    if (response == 1) successResponse.data = "succesfully deleted the airport";
    else {
      successResponse.data = "request not completed";
      successResponse.message = "data item not present";
      successResponse.success = false;
      return res.status(StatusCodes.BAD_REQUEST).json(successResponse);
    }
    res.json(successResponse).status(StatusCodes.NO_CONTENT);
  } catch (error) {
    errorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
};

const getAllAirplane = async (req, res) => {
  try {
    const response = await airplaneservice.getAllAirplaneService();
    successResponse.data = response;
    res.send(successResponse);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
};

const getByAirplaneId = async (req, res) => {
  try {
    const response = await airplaneservice.getAirplanebyIdService(
      req.params.id
    );
    console.log(response);
    if (response === null)
      successResponse.message = "please enter a valid airplane id";
    successResponse.data = response;
    res.json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
};

const updateAirplane = async (req, res) => {
  try {
    const response = await airplaneservice.updateAirplaneService(
      req.body.data,
      req.body.id
    );
    successResponse.data = response;
    res.send(successResponse);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAirplane,
  deleteAirplane,
  getAllAirplane,
  getByAirplaneId,
  updateAirplane,
};
