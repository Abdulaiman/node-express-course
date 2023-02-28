const express = require("express");
const { hello } = require("../controllers/hello-controller");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/").get(protect, hello);

module.exports = router;
