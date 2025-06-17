import express from "express";
import { getProcesses, updateStatus } from "../services/processService.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /processes:
 *   get:
 *     summary: Lista processos filtrados por parâmetros opcionais
 *     tags:
 *       - Processos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: params
 *         schema:
 *           type: string
 *         description: Parâmetros para busca textual
 *       - in: query
 *         name: dataInicial
 *         schema:
 *           type: string
 *           format: date
 *         description: Data inicial do filtro (YYYY-MM-DD)
 *       - in: query
 *         name: dataFinal
 *         schema:
 *           type: string
 *           format: date
 *         description: Data final do filtro (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Lista de processos retornada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       500:
 *         description: Erro interno no servidor
 */
router.get("/", verifyToken, async (req, res) => {
  try {
    const { params, dataInicial, dataFinal } = req.query;
    const response = await getProcesses({ params, dataInicial, dataFinal });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /processes/{hash_id}/status:
 *   patch:
 *     summary: Atualiza o status de um processo específico
 *     tags:
 *       - Processos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: hash_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Hash ID do processo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - newStatus
 *             properties:
 *               newStatus:
 *                 type: string
 *                 example: finalizado
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       401:
 *         description: Token inválido ou ausente
 *       500:
 *         description: Erro no servidor
 */
router.patch("/:hash_id/status", verifyToken, async (req, res) => {
  try {
    const response = await updateStatus(
      req.params.hash_id,
      req.body.newStatus,
      req.token
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

export default router;
