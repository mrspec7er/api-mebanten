const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartCnt");

router.post("/v1/cart", cartController.store);
router.get("/v1/cart", cartController.getAll);
router.get("/v1/cart/:id", cartController.getOne);

module.exports = router
