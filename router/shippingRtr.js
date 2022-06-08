const express = require("express");
const router = express.Router();

const shippingController = require("../controllers/shippingCnt");

router.get("/v1/shipping", shippingController.index);
router.post("/v1/shipping", shippingController.store);

module.exports = router
