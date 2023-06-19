const { JSONCookies } = require("cookie-parser");
const joi = require("joi");

const validateUser = (user) => {
  const schema = joi.object({
    fullName: joi.string().min(3).required(),
    phoneNumber: joi.string().length(10).required(),
    email: joi.string().email(),
    NID: joi.string().length(16),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });
  return schema.validate(user);
};
const validateEmployee = (employee) => {
  const schema = joi.object({
    fullName: joi.string().min(3).required(),
    phoneNumber: joi.string().length(10).required(),
    email: joi.string().email(),
    NID: joi.string().length(16),
  })
    return schema.validate(employee);
}

const validateCar = (car) => {
    const schema = joi.object({
    ChasisNumber: joi.string().required(),
    Manufacturer: joi.string().required(),
      Year: joi.string().required(),
    price: joi.number().required(),
    ModelName: joi.string().required(),
    owners: joi.array().required(),
  })
    return schema.validate(car);
}

module.exports = {validateUser, validateEmployee,validateCar};
