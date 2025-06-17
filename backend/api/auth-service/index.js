import express from "express";
import authRoutes from "./routes/authRoutes.js";
import setupSwagger from "../swagger/swagger.js";

setupSwagger(app);


const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3003, () => console.log("Process service rodando na porta 3003"));
