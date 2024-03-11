const { StatusCodes } = require("http-status-codes");
const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "something went wrong while creating the airplane",
      data: {},
      error: {
        explaination:
          "model number not found in the incoming request in correct form",
      },
    });
  }
  next();
};
module.exports = { validateCreateRequest };
