// Package Imports
import express from "express";
import cors from "cors";
import "./loadEnv.js";

//File Imports
import recordRoutes from "./routes/record.js";

//Package implementation
const app = express();
app.use(cors());
app.use(express.json());

//Setup Routes
app.use("routes", recordRoutes);

// Variable Imports
const port = process.env.PORT || 5000;

// Connect to DB
import { connectToServer } from "./db/conn.js";

// _________________________________ //

app.listen(port, () => {
  // perform a database connection when server starts
  connectToServer(function (err) {
    if (err) console.error("issue connecting to db", err);
  });
  console.log(`Server is running on port: ${port}`);
});
