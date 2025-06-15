import express from 'express';
import { getProcesses, updateStatus} from '../services/processService.js';
// import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await getProcesses(req.query, req.token);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

router.patch('/:hash_id/status', async (req, res) => {
  try {
    const response = await updateStatus(req.params.hash_id, req.body.newStatus, req.token);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

export default router;
