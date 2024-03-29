const { airplane } = require("../models/airplane");
const { appError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const { airplaneRepository } = require("./../repositories");

const airplanerepository = new airplaneRepository(airplane);

const ariplaneCreateService = async (data) => {
  try {
    const response = await airplanerepository.create(data);
    return response;
  } catch (error) {
    let explaination = [];
    error.errors.map((e) => {
      explaination.push(e.message);
    });
    if (
      error.name == "SequelizeDatabaseError" ||
      error.name == "SequelizeValidationError"
    ) {
      throw new appError(explaination, StatusCodes.BAD_REQUEST);
    }
    throw new appError(
      "something went wrong while creating the aiplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const airplaneDeleteService = async (data) => {
  try {
    const response = await airplanerepository.destroy(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const getAllAirplaneService = async (data) => {
  try {
    const response = await airplanerepository.getAll();
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const getAirplanebyIdService = async (data) => {
  try {
    const response = await airplanerepository.get(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const updateAirplaneService = async (data, id) => {
  try {
    const response = await airplanerepository.update(data, id);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
  ariplaneCreateService,
  airplaneDeleteService,
  getAllAirplaneService,
  getAirplanebyIdService,
  updateAirplaneService,
};
