const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");

// Enable CORS for all origins
app.use(cors());

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
