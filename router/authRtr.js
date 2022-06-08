const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const authController = require("../controllers/authCnt");

router.get("/v1/user", verifyToken, authController.index);

module.exports = router
