const admin = require("../config/firebaseConfig");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
exports.index = async (req, res) => {
  const { user_id } = res.locals;

  const user = await admin.auth().getUser(user_id);

  res.status(200).json({
    data: user,
  });
};

exports.register = async (req, res) => {
  try {
    const { user_id } = res.locals;
    const { email, phoneNumber, displayName } = req.body;

    const user = await admin.auth().updateUser(user_id, {
      email,
      phoneNumber,
      displayName,
    });

    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.updateImageProfile = async (req, res) => {
  try {
    const { filename } = req.file;
    const root = process.env.PAYMENT_BASE_URL + "/v1/get-profile/";
    const url = root + filename;
    res.status(201).json({
      data: url,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.getImageProfile = async (req, res, next) => {
  try {
    const { file_path } = req.params;
    const options = {
      root: path.resolve("./") + "/img",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    };
    res.set("Content-Type", "image/jpeg");
    res.sendFile(file_path, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log("Sent:", file_path);
      }
    });

    // res.send(path.resolve("./"));
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.deleteImageProfile = async (req, res) => {
  try {
    const { img_profile } = req.body;
    const imgPath = img_profile.split("/")[5];
    const file = path.resolve("./") + "/img/" + imgPath;

    if (file) {
      fs.unlink(file, function (msg) {
        res.status(201).json({
          message: msg,
        });
      });
    } else {
      res.status(401).json({
        message: "profile image undefine",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
