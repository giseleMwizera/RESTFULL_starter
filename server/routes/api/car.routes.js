const express = require("express");
const validate = require("../../middleware/validate");
const { validateEmployee, validateCar, } = require("../../models/validators/validator");
const {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
  getCar,
  getCarHistory,
} = require("../../controllers/car.controller");
const _car_router = express.Router();

_car_router
  .route("/")
  .get(getAllCars)
  .post([validate(validateCar), createCar])
  .put(updateCar)
  .delete(deleteCar);
_car_router.route("/history").get(getCarHistory);
_car_router.route("/:id").get(getCar);

module.exports = _car_router;
