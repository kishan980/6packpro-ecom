const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  if(err.name === "CastError"){
    const message =`Resource not found. Invalid: ${err.path}`
    err = new ErrorHandler(message,400)
  }
  return res.status(err.statusCode).json({
    success: false,
    status: err.statusCode,
    message: err.message,
    // message:err.stack
  });
};
