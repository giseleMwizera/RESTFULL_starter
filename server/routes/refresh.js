const router = require("express").Router();
const { handleRefreshToken } = require("../controllers/auth/refreshToken");

router.get("/", handleRefreshToken);

module.exports = router;
