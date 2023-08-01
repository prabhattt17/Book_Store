const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://prabhat13:PrabhatGupta13@cluster0.vpnvxhc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to DataBase"))
  //   .then(() => {
  //     app.listen(3000);
  //   })
  .catch((err) => console.log("error"));

app.listen(8000);
