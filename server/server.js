import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import financeRoutes from "./routes/financeRoutes.js";
import DMRoutes from "./routes/DMRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/finance", financeRoutes);
app.use("/digital-marketing", DMRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
