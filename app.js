const express = require("express");
const connectDB = require("./config/db");
const router = require("./route/recipeRoute");
const app = express();

app.use(express.json());

connectDB();
app.use("/recipe", router);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log("Server Stared"));
