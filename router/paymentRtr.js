const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const paymentController = require("../controllers/paymentCnt");

router.post("/v1/direct-payment", verifyToken, paymentController.directPayment);
router.post("/v1/payment-status", verifyToken, paymentController.paymentStatus);
router.post("/v1/payment-notify", paymentController.paymentNotify);

// delivery
router.post("/v1/delivery-direct-payment", verifyToken, paymentController.deliveryDirectPayment);
router.post("/v1/delivery-payment-notify", paymentController.deliveryPaymentNotify);

module.exports = router
