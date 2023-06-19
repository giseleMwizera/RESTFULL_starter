const router = require("express").Router();
const handleLogin = require("../../controllers/auth/login");
const handleNewUser = require("../../controllers/auth/register");
const validate = require("../../middleware/validate");
const { validateUser } = require("../../models/validators/validator");
 
router.post("/login", handleLogin);
   // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint User end Points'
router.post("/signup", [validate(validateUser)], handleNewUser);

module.exports = router;
