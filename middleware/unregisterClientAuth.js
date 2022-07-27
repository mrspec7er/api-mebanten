const admin = require("../config/firebaseConfig");

const unregisterVerifyToken = async (req, res, next) => {
  try {
    const rawToken = req.headers.authorization;
    const accessToken = rawToken.split(" ")[1];
    const userData = await admin.auth().verifyIdToken(accessToken);

    if (userData) {
      res.locals.user_id = userData.user_id;
      return next();
    }

    res.status(403).json({
      error: "Unauthorize user",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = unregisterVerifyToken;
