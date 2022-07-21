const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/clientAuth");
const authController = require("../controllers/authCnt");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, Date.now() + `.${ext}`); //Appending .jpg
  },
});

const upload = multer({
  storage: storage,
  //   dest: "../img",
});

router.get("/v1/user", verifyToken, authController.index);
router.post("/v1/register", verifyToken, authController.register);
router.post(
  "/v1/update-profile",
  upload.single("img"),
  authController.updateImageProfile
);
router.get("/v1/get-profile/:file_path", authController.getImageProfile);

module.exports = router;
