const { StatusCodes } = require("http-status-codes");
const validateCreateRequest = (req, res, next) => {
  if (req.body.name && req.body.address && req.body.cityId && req.body.code)
    next();
  let missingcolumn = [];
  if (!req.body.name)
    missingcolumn.push(
      "name is not found in the incoming request in correct form"
    );
  if (!req.body.address)
    missingcolumn.push(
      "address is not found in the incoming request in correct form"
    );
  if (!req.body.cityId)
    missingcolumn.push(
      "cityId is not found in the incoming request in correct form"
    );
  if (!req.body.code)
    missingcolumn.push(
      "code is not found in the incoming request in correct form"
    );
  return res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: "something went wrong while creating the airport",
    data: {},
    error: missingcolumn,
  });
};
module.exports = { validateCreateRequest };
