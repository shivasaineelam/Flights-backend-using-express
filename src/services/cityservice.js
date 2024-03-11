const { cityRepository } = require("./../repositories");
const { cities } = require("./../models");
const { appError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/response");
const cityrepository = new cityRepository(cities);
const cityCreateService = async (data) => {
  try {
    const response = await cityrepository.create(data);
    return response;
  } catch (error) {
    throw new appError("City already exists!", StatusCodes.BAD_REQUEST);
  }
};
const cityDestroyService = async (data) => {
  try {
    const response = await cityrepository.destroy(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while creating the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const cityGetService = async (data) => {
  try {
    const response = await cityrepository.getAll(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const cityGetByIdService = async (data) => {
  try {
    const response = await cityrepository.get(data);
    return response;
  } catch (error) {
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};
const cityUpdateService = async (data, id) => {
  try {
    const response = await cityrepository.update(data, id);
    return response;
  } catch (error) {
    console.log(error);
    throw new appError(
      "something went wrong while executing the request",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  cityCreateService,
  cityDestroyService,
  cityGetByIdService,
  cityUpdateService,
  cityGetService,
};
