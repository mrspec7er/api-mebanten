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
router.put("/v1/user", verifyToken, authController.updateUserProfile);
router.post(
  "/v1/img-profile",
  verifyToken,
  upload.single("img"),
  authController.updateProfilePic
);
router.get("/v1/get-profile/:file_path", authController.getImageProfile);
// router.post(
//   "/v1/update-profile",
//   upload.single("img"),
//   authController.updateImageProfile
// );
// router.post("/v1/delete-profile", authController.deleteImageProfile);

module.exports = router;
