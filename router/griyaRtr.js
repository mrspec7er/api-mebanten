const express = require("express");
const router = express.Router();

const griyaController = require("../controllers/griyaCnt");

router.get("/v1/griya/:district_id", griyaController.index);
router.post("/v1/griya", griyaController.store);

module.exports = router
