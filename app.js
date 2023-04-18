// require("dotenv").config();
// import express, { json } from "express";
// const app = express();
// import cors from "cors";
// import "./db/conn";
// import router from "./Routes/router";
// const PORT = 4002;

// // middleware
// app.use(json());
// app.use(cors((origin = ["http://localhost:3000", "http://localhost:5000"])));
// app.use(router);

// app.listen(PORT, () => {
//   console.log(`Server start at Port No :${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002;

// middleware
app.use(express.json());
app.use(cors((origin = ["https://celebrated-sable-39cb58.netlify.app/", "https://web-production-de1e.up.railway.app/"])));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server start at Port No :${PORT}`);
});

