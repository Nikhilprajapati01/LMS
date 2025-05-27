// middlewares/error-middleware.js
const Apperror = require("../utils/error-utils");
const jwt = require('jsonwebtoken');

const errormiddleware = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Something went wrong";

  res.status(err.statuscode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};

const isloggedin = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new Apperror("Unauthenticated", 400));
  }

  const userDetails = await jwt.verify(token, process.env.jwt_secret);
  req.user = userDetails; // use req, not res
  next();
};

module.exports = {
  errormiddleware,
  isloggedin,
};
