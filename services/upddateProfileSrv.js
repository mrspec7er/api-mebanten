const multer = require("multer");

const upload = multer({
  // storage: storage
  dest: "../../../public",
});

exports = upload;
