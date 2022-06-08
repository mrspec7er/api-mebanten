const express = require("express");
const router = express.Router();

const bantenController = require("../controllers/bantenCnt");

router.get("/v1/banten", bantenController.getAll);
router.get("/v1/banten/:banten_id/:griya_id", bantenController.getOne);
router.post("/v1/banten", bantenController.store);
router.post("/v1/banten-option", bantenController.storeOption);
router.get("/v1/banten-option/:banten_id", bantenController.getOptions);




//Deivery Order
router.get("/v1/delivery-banten/:address_id", bantenController.deliveryGetAll);
router.get("/v1/delivery-banten/:address_id/:griya_id/:banten_id", bantenController.deliveryGetOne);

module.exports = router
