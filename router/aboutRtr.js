const express = require("express");
const router = express.Router();

const aboutController = require("../controllers/aboutCnt");

router.get("/v1/about", aboutController.index);

module.exports = router
