const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = 6969;

app.listen(PORT, () => {
  console.log(`App is running in port : ${PORT}`);
});
