const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const cartController = require("../controllers/cartCnt");

router.post("/v1/cart", verifyToken, cartController.store);
router.get("/v1/cart", verifyToken, cartController.getAll);
router.get("/v1/cart/:id", verifyToken, cartController.getOne);

//Delivery Order
router.post("/v1/delivery-cart", verifyToken, cartController.deliveryStore);

module.exports = router
