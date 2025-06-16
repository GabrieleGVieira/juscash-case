import express from 'express';
import { getProcesses, updateStatus} from '../services/processService.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  try {
    const { params, dataInicial, dataFinal } = req.query;
    const response = await getProcesses({params, dataInicial, dataFinal});
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

router.patch('/:hash_id/status', verifyToken, async (req, res) => {
  try {
    const response = await updateStatus(req.params.hash_id, req.body.newStatus, req.token);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

export default router;
