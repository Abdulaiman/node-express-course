require("dotenv").config();
const express = require("express");
const loginRouter = require("./routes/login-route.js");
const helloRouter = require("./routes/hello-route.js");
const app = express();
app.use(express.json());

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/hello", helloRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app is listening at port ${port}`));
