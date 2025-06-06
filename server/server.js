const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");
const financeRoutes = require("./routes/financeRoutes");
const DMRoutes = require("./routes/DMRoutes");


// Enable CORS for all origins
app.use(cors());

app.use(express.json());
app.use("/", userRoutes);
app.use("/finance", financeRoutes);
app.use("/digital-marketing", DMRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
