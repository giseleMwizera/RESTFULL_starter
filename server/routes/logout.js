const router = require("express").Router();
const {handleLogout} = require("../controllers/auth/logout");

router.get("/",handleLogout);

module.exports = router;
