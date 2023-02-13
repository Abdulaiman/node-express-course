const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
