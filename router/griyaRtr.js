const express = require("express");
const router = express.Router();

const griyaController = require("../controllers/griyaCnt");

router.get("/v1/griya", griyaController.index);
router.post("/v1/griya", griyaController.store);
router.post("/v1/griya-banten", griyaController.griyaBantens);

module.exports = router
