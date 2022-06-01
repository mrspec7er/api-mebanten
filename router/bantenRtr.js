const express = require("express");
const router = express.Router();

const bantenController = require("../controllers/bantenCnt");

router.get("/v1/banten", bantenController.getAll);
router.get("/v1/banten/:id", bantenController.getOne);
router.post("/v1/banten", bantenController.store);
router.post("/v1/banten-option", bantenController.storeOption);
router.get("/v1/banten-option/:banten_id", bantenController.getOptions);

module.exports = router
