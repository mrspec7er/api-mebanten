const admin = require("../config/firebaseConfig");
const path = require("path");
const fs = require("fs");
const { User } = require("../models");
require("dotenv").config();

exports.index = async (req, res) => {
  const { user_id } = res.locals;

  // const user = await admin.auth().getUser(user_id);

  const user = await User.findOne({
    where: {
      user_id,
    },
  });

  res.status(200).json({
    data: user,
  });
};

exports.register = async (req, res) => {
  try {
    // const { user_id } = res.locals;
    // const { email, phoneNumber, displayName } = req.body;

    // const user = await admin.auth().updateUser(user_id, {
    //   email,
    //   phoneNumber,
    //   displayName,
    // });

    // res.status(200).json({
    //   data: user,
    // });

    const { user_id } = res.locals;
    const { name, phone, email } = req.body;
    const role = "USER";
    const profile_pic =
      process.env.PAYMENT_BASE_URL + "/v1/get-profile/default.png";

    const userList = await User.findAll({
      where: {
        user_id,
      },
    });

    if (userList.length > 0) {
      res.status(200).json({
        message: "User has registered",
      });
    } else {
      const user = await User.create({
        name,
        phone,
        email,
        role,
        profile_pic,
        user_id,
      });

      res.status(200).json({
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { user_id } = res.locals;
    const { name, phone, email } = req.body;

    const user = await User.findOne({
      where: {
        user_id,
      },
    });

    if (user) {
      const updateUser = await user.update({
        name,
        phone,
        email,
      });

      res.status(200).json({
        data: updateUser,
      });
    } else {
      res.status(401).json({
        message: "User Undefine",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// exports.updateImageProfile = async (req, res) => {
//   try {
//     const { filename } = req.file;
//     const root = process.env.PAYMENT_BASE_URL + "/v1/get-profile/";
//     const url = root + filename;
//     res.status(201).json({
//       data: url,
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// };

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

// exports.deleteImageProfile = async (req, res) => {
//   try {
//     const { img_profile } = req.body;
//     const imgPath = img_profile.split("/")[5];
//     const file = path.resolve("./") + "/img/" + imgPath;

//     if (file) {
//       fs.unlink(file, function (msg) {
//         res.status(201).json({
//           message: msg,
//         });
//       });
//     } else {
//       res.status(401).json({
//         message: "profile image undefine",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// };

exports.updateProfilePic = async (req, res) => {
  try {
    const { user_id } = res.locals;
    const default_pic =
      process.env.PAYMENT_BASE_URL + "/v1/get-profile/default.png";

    const user = await User.findOne({
      where: {
        user_id,
      },
    });

    const { filename } = req.file;

    if (user.profile_pic === default_pic) {
      const updateResult = await uploadImg(filename, user);

      res.status(201).json({
        data: updateResult,
      });
    } else {
      const imgPath = user.profile_pic.split("/")[5];
      const file = path.resolve("./") + "/img/" + imgPath;

      fs.unlink(file, async function (msg) {
        const updateAndDeleteResult = await uploadImg(filename, user);

        res.status(201).json({
          data: updateAndDeleteResult,
          message: msg,
          filename: filename,
        });
      });

      // res.status(201).json({
      //   data: file,
      //   name: filename,
      // });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

async function uploadImg(filename, user) {
  const root = process.env.PAYMENT_BASE_URL + "/v1/get-profile/";
  const url = root + filename;

  const updateProfile = await user.update({
    profile_pic: url,
  });

  return updateProfile;
}
