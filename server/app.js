const express = require("express");
const app = express();

const dotenv = require("dotenv");
const path = require("path");

const connetDatabase = require("./config/connectDatabase");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

app.get("/", (req, res) => {
  res.send("Hello from server");
});

const products = require("./routes/productsRoute");
const orders = require("./routes/ordersRoute");

connetDatabase();

app.use(express.json());

app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `The server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
