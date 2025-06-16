import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import processRoutes from "./routes/processRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/process", processRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API Gateway rodando na porta ${PORT}`));
