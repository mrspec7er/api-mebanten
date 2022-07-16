const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");

const addressController = require("../controllers/addressCnt");

router.get("/v1/province", addressController.getProvince);
router.post("/v1/province", addressController.storeProvince);
router.get("/v1/district/:province_id", addressController.getDistrict);
router.post("/v1/district", addressController.storeDistrict);
router.get("/v1/kecamatan/:district_id", addressController.getKecamatan);
router.post("/v1/kecamatan", addressController.storeKecamatan);
router.post("/v1/address", verifyToken, addressController.storeAddress);
router.put("/v1/address", verifyToken, addressController.updateAddress);
router.delete("/v1/address/:address_id", verifyToken, addressController.deleteAddress);
router.get("/v1/address", verifyToken, addressController.getAddress);

module.exports = router
