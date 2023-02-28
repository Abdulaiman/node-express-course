const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;
  req.headers.authorization.startsWith("Bearer")
    ? (token = req.headers.authorization.split(" ")[1])
    : "";

  if (token) {
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!verify) {
      return res.status(401).json({
        message: "unauthorized",
      });
    } else {
      req.user = verify;
      next();
    }
  }
};
module.exports = { protect };
