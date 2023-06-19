const Owner = require("../models/Owner.model");

const getAllCarOwners = async (req, res) => {
    try {
        const carOwners = await Owner.find();
        if (!carOwners) {
            return res.status(204).json({message: "No car owners found"})
        }
        return res.status(200).json({carOwners})
    } catch (err) {
        return res.status(500).send(err);
    }
}

const createCarOwner = async (req, res) => {
    const { fullName, email, NID, phoneNumber } = req.body;
    try {
        const owner = await Owner.findOne({ $or: [{ email},{NID}] }).exec();
        if (owner) {
            return res.status(400).json({ message: "Owner already exists" });
        }
        const newOwner = await Owner.create({
            fullName,email,NID,phoneNumber
        })
        return res.status(201).json({ message: "Created successfully", newOwner });

    } catch (err) {
        return res.status(500).json({message: err}
        )
    }
}


const udpateCarOwner = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ Message: "ID parameter is required" });
  }
  const carOwner = await Owner.findOne({ _id: req.body.id }).exec();

  if (!carOwner) {
    return res
      .status(204)
      .json({ message: `No car owner matches ID ${req.body.id} ` });
  }
  if (req.body.fullName) carOwner.fullName = req.body.fullName;
  if (req.body.email) carOwner.email = req.body.email;
  if (req.body.NID) carOwner.NID = req.body.NID;
  if (req.body.phoneNumber) carOwner.phoneNumber = req.body.phoneNumber;

  const result = await carOwner.save();
    return res.status(200).json({ message: "Updated successfully", result });
};

const deleteCarOwner = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: "Car Owner Id required" });
  const carOwner = await Owner.findOne({ _id: req.body.id }).exec();
  if (!carOwner) {
    return res
      .status(204)
      .json({ message: `No car owner matches ID ${req.body.id} ` });
  }
  await carOwner.deleteOne({ _id: req.body.id });

  return res.status(200).json({message:"Deleted successfully"});
};

const getCarOwner = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Car owner Id required" });
  const carOwner = await Owner.findOne({ _id: req.params.id }).exec();
  if (!carOwner) {
    return res
      .status(400)
      .json({ message: `Car Owner ID ${req.params.id} not found!` });
  }
  return res.status(200).json(carOwner);
};


module.exports = {getAllCarOwners, createCarOwner, udpateCarOwner,deleteCarOwner,getCarOwner};