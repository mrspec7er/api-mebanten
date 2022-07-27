const express = require("express")
const router = express.Router();

router.get("/v1/ping", (req, res) => {
  res.status(200).json({
    data: "pong",
    timeStamp: Date.now()
  })
})

module.exports = router