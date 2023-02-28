const hello = async (req, res, next) => {
  const { name } = req.user;

  res.status(200).json({
    message: `congratulations on finishing your assignment: ${name}`,
  });
};
module.exports = { hello };
