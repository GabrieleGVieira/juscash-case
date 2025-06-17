import express from "express";
import processRoutes from "./routes/processRoutes.js";
import setupSwagger from "../swagger/swagger.js";

setupSwagger(app);

const app = express();
app.use(express.json());

app.use("/process", processRoutes);

app.listen(3002, () => console.log("Process service rodando na porta 3002"));
