const { airplaneservice } = require("./../services");
const { StatusCodes } = require("http-status-codes");
const createairplane = async (req, res) => {
  try {
    const response = await airplaneservice.airplaneservice({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.send({ data: response }).status(StatusCodes.CREATED);
  } catch (error) {
    throw error;
  }
};

module.exports = { createairplane };
