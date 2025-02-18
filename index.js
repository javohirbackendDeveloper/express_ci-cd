const express = require("express");
const router = require("./router/product.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("Backend is running in " + PORT);
});
