const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const bantenController = require("../controllers/bantenCnt");

router.get("/v1/banten/detail/:banten_id", bantenController.getOne);
router.post("/v1/banten", bantenController.store);
router.get("/v1/banten/:griya_id", bantenController.getAll);
router.post("/v1/banten-option", bantenController.storeOption);
router.get("/v1/banten-option/:banten_id", bantenController.getOptions);




//Deivery Order
router.get("/v1/delivery-banten/:address_id", verifyToken, bantenController.deliveryGetAll);
router.get("/v1/delivery-banten/detail/:address_id/:banten_id", verifyToken, bantenController.deliveryGetOne);
router.post("/v1/delivery-banten", bantenController.deliveryStore);
router.post("/v1/delivery-banten-option", bantenController.deliveryStoreOption);
router.get("/v1/delivery-banten-option/:banten_id", bantenController.deliveryGetOptions);

module.exports = router
