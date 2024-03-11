const { airport } = require("../models/airplane");
const { appError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const { airportRepository } = require("./../repositories");

const airportrepository = new airportRepository(airport);

const ariportCreateService = async (data) => {
  try {
    const response = await airportrepository.create(data);
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
const airportDeleteService = async (data) => {
  try {
    const response = await airportrepository.destroy(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const getAllAirportService = async (data) => {
  try {
    const response = await airportrepository.getAll();
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const getAirportbyIdService = async (data) => {
  try {
    const response = await airportrepository.get(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const updateAirportService = async (data, id) => {
  try {
    const response = await airportrepository.update(data, id);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
module.exports = {
  ariportCreateService,
  airportDeleteService,
  getAllAirportService,
  getAirportbyIdService,
  updateAirportService,
};
