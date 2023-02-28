const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { name, password } = req.body;
  const token = jwt.sign({ name }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.EXPIRES_IN,
  });
  console.log(token);
  res.status(200).json({
    token,
  });
};
module.exports = { login };
