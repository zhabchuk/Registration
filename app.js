const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth/auth.routes");
const linkRouter = require("./routes/link/link.routes");

const app = express();
app.use(express.json({ extended: true }));
const PORT = config.get("port") || 5000;
const MONGODBURL = config.get("mongodbUrl");

app.use("/api/auth", authRouter);
app.use("/api/link", linkRouter);
async function start() {
  try {
    await mongoose.connect(MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (error) {
    console.log("Server Error", error.message);
    process.exit(1);
  }
}

start();
