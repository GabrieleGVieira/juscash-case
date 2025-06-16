import { ProcessService } from '../services/processService.js';

export class ProcessController {
  constructor() {
    this.service = new ProcessService();
  }

  get = async (req, res) => {
    try {
      const { params, dataInicial, dataFinal } = req.query
      const processes = await this.service.getProcesses(params, dataInicial, dataFinal);
      res.status(200).json(processes);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { hash_id } = req.params;
      const { newStatus } = req.body;
      await this.service.updateStatus(hash_id, newStatus);
      res.status(200);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  };
}
