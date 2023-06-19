const express = require("express");
const validate = require("../../middleware/validate");
const { validateEmployee } = require("../../models/validators/validator");
const {
  getAllCarOwners,
  createCarOwner,
  udpateCarOwner,
  deleteCarOwner,
  getCarOwner,
} = require("../../controllers/owner.controller");
const isAdmin = require("../../middleware/isAdmin");
const _car_owner_router = express.Router();


_car_owner_router
  .route("/")
  /**
   * @openapi
   * /:
   * get:
   *  tag:
   *    - Owner
   *    description: Responds if the app is up and running
   *    responses:
   *       200:
   *         description: App is running
   */
  .get(getAllCarOwners)
  .post([validate(validateEmployee), createCarOwner])
  .put(udpateCarOwner)
  .delete(deleteCarOwner);

_car_owner_router.route("/:id").get(getCarOwner);

module.exports = _car_owner_router;
