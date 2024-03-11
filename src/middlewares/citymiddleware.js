const { StatusCodes } = require("http-status-codes");
const validateCreateRequest = (req, res, next) => {
  if (req.body.name) {
    next();
  }

  return res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: "something went wrong while creating the airport",
    data: {},
    error: {
      explaination: "name is not found in the incoming request in correct form",
    },
  });
};
module.exports = { validateCreateRequest };
