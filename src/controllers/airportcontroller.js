const { airportService } = require("./../services");
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("./../utils/response/");

const createAirport = async (req, res) => {
  try {
    const response = await airportService.ariportCreateService({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
};

const deleteAirport = async (req, res) => {
  try {
    const response = await airportService.airportDeleteService(req.params.id);
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

const getAllAirport = async (req, res) => {
  try {
    const response = await airportService.getAllAirportService();
    successResponse.data = response;
    res.send(successResponse);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
};

const getByAirportId = async (req, res) => {
  try {
    const response = await airportService.getAirportbyIdService(req.params.id);
    console.log(response);
    if (response === null)
      successResponse.message = "please enter a valid airport id";
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    console.log(error);
    errorResponse.error = error;
    res.status(error.statusCode).json(errorResponse);
  }
};

const updateAirport = async (req, res) => {
  try {
    const response = await airportService.updateAirportService(
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
  createAirport,
  deleteAirport,
  getAllAirport,
  getByAirportId,
  updateAirport,
};
