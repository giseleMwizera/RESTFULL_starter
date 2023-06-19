const User = require("../../models/User.model");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint User end Points'
  try {
    const { fullName, email, phoneNumber, NID, password } = req.body;

    const duplicate = await User.findOne({ email }).exec();

    if (duplicate) return res.status(209).json({ message: "User exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      phoneNumber,
      NID,

      password: hashedPassword,
    });
    res.status(201).json({ message: "User created!", newUser });
  } catch (err) {
    console.error(err);
  }
};

module.exports = handleNewUser;
