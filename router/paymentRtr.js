const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const paymentController = require("../controllers/paymentCnt");

router.post("/v1/direct-payment", verifyToken, paymentController.directPayment);
router.post("/v1/payment-status", verifyToken, paymentController.paymentStatus);
router.post("/v1/payment-notify", verifyToken, paymentController.paymentNotify);

module.exports = router
