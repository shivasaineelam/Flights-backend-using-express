const { StatusCodes } = require("http-status-codes");
const { cityservice } = require("./../services");
const { successResponse, errorResponse } = require("./../utils/response");

const createCityController = async (req, res) => {
  try {
    const response = await cityservice.cityCreateService({
      name: req.body.name,
    });
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.json(errorResponse).status(error.StatusCode);
  }
};
const deleteCityController = async (req, res) => {
  try {
    const response = await cityservice.cityDestroyService(req.params.id);
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.json(errorResponse).status(error.StatusCode);
  }
};
const updateCityController = async (req, res) => {
  try {
    const response = await cityservice.cityUpdateService(
      req.body.data,
      req.body.id
    );
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.json(errorResponse).status(error.StatusCode);
  }
};
const getAllCityController = async (req, res) => {
  try {
    const response = await cityservice.cityGetService();
    successResponse.data = response;
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.json(errorResponse).status(error.StatusCode);
  }
};
const getByCityIdController = async (req, res) => {
  try {
    const response = await cityservice.cityGetByIdService(req.params.id);
    successResponse.data = response;
    if (!response) {
      successResponse.message = "please enter a valid airplane id";
      return res.json(successResponse).status(StatusCodes.BAD_REQUEST);
    }
    res.json(successResponse).status(StatusCodes.CREATED);
  } catch (error) {
    errorResponse.error = error;
    res.json(errorResponse).status(error.StatusCode);
  }
};

module.exports = {
  createCityController,
  getAllCityController,
  updateCityController,
  deleteCityController,
  getByCityIdController,
};
