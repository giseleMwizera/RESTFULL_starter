const Car = require("../models/Car.model");
const Owner = require("../models/Owner.model");

const getAllCars = async (req, res) => {
  // #swagger.tags = ['Car']
  // #swagger.summary = "Get All Cars"
  // #swagger.description = 'Endpoint Car end Points'
  try {
    const cars = await Car.find();
    if (!cars) {
      return res.status(204).json({ message: "No car owners found" });
    }
    return res.status(200).json({ cars });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createCar = async (req, res) => {
  const { ChasisNumber, Manufacturer, Year, Price, ModelName, owners } =
    req.body;
  try {
    const owner = owners.map(async (owner) => {
      await Owner.findOne({ _id: owner });
    });
      console.log(owner);
    if (!owner) {
      return res.status(400).json({ message: "Owner not found" });
    }
    const car = await car.findOne({ ChasisNumber }).exec();
    if (car) {
      return res.status(400).json({ message: "Car already exists" });
    }
    const newCar = await Owner.create({
      ChasisNumber,
      Manufacturer,
      Year,
      Price,
      ModelName,
      owners,
    });
    return res.status(201).json({ message: "Created successfully", newCar });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateCar = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ Message: "ID parameter is required" });
  }
  const car = await Car.findOne({ _id: req.body.id }).exec();

  if (!car) {
    return res
      .status(204)
      .json({ message: `No car  matches ID ${req.body.id} ` });
    }
    
  if (req.body.ChasisNumber) car.ChasisNumber = req.body.ChasisNumber;
  if (req.body.Manufacturer) car.Manufacturer = req.body.Manufacturer;
  if (req.body.Year) car.Year = req.body.Year;
  if (req.body.Price) car.Price = req.body.Price;
  if (req.body.ModelName) car.ModelName = req.body.ModelName;
    if (req.body.owners) {
        req.body.owners.map(async (owner) => {
            if (!await Owner.findOne({ _id: owner })) {
                return res.status(400).json({
                    message: `The owner ${owner} doesn't exist`
                });
            }
            car.owners = req.body.owners;
      })
  }

  const result = await car.save();
  return res.status(200).json({ message: "Updated successfully", result });
};

const deleteCar = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "Car = Id required" });
  const car = await Car.findOne({ _id: req.body.id }).exec();
  if (!car) {
    return res
      .status(204)
      .json({ message: `No car matches ID ${req.body.id} ` });
    }

    await car.deleteOne({ _id: req.body.id });
  return res.status(200).json({ message: "Deleted successfully" });
};

const getCar = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Car Id required" });
  const car = await Car.findOne({ _id: req.params.id }).exec();
  if (!car) {
    return res
      .status(400)
      .json({ message: `Car ID ${req.params.id} not found!` });
  }
  return res.status(200).json(carOwner);
};
const getCarHistory = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(500).send(err);
    }
}
module.exports = {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
  getCar,
  getCarHistory,
};
