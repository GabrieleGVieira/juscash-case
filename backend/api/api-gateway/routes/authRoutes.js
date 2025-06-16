import express from "express";
import { createUser, login } from "../services/authService.js";

const router = express.Router();
const AUTH_SERVICE_URL = "http://localhost:3003"; // porta do auth-service

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const response = await login(email, password);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Erro no login" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const email = req.body.email
    const fullName = req.body.fullName
    const password = req.body.password
    const response = await createUser({email, fullName, password});
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Erro no registro" });
  }
});

export default router;
