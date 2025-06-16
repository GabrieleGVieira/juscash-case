import express from "express";
import axios from "axios";

const router = express.Router();
const AUTH_SERVICE_URL = "http://localhost:3003"; // porta do auth-service

// router.post("/login", async (req, res) => {
//   try {
//     const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
//     res.json(response.data);
//   } catch (err) {
//     res.status(err.response?.status || 500).json(err.response?.data || { error: "Erro no login" });
//   }
// });


export async function login(email, password) {
  return await axios.post(
    `${AUTH_SERVICE_URL}/auth/login`, 
    {email, password},
  );
}

export async function createUser({email, fullName, password, token}) {
  return await axios.post(
    `${AUTH_SERVICE_URL}/auth/register`, 
    {email, fullName, password},
  )
}
