import express from "express";
import { createUser, login } from "../services/authService.js";

const router = express.Router();


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const response = await login(email, password);
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { error: "Erro no login" });
  }
});

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - fullName
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: novo@email.com
 *               fullName:
 *                 type: string
 *                 example: Maria da Silva
 *               password:
 *                 type: string
 *                 example: senhaSegura123
 *     responses:
 *       200:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro no servidor
 */
router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const fullName = req.body.fullName;
    const password = req.body.password;
    const response = await createUser({ email, fullName, password });
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { error: "Erro no registro" });
  }
});

export default router;
