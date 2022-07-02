// Importing module
import express from "express";

const app = express();
const PORT: Number = 3000;

// Handling GET / Request
app.get("/", (req, res) => {
  res.send("Back End is Up and Updating");
});

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});
