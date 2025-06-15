import { ProcessService } from '../services/processService.js';

export class ProcessController {
  constructor() {
    this.service = new ProcessService();
  }

  get = async (req, res) => {
    try {
      const processes = await this.service.getProcesses(req.query);
      res.status(200).json(processes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { hash_id } = req.params;
      const { newStatus } = req.body;
      await this.service.updateStatus(hash_id, newStatus);
      res.status(200).json("Status do processo com hash_Id " + hash_id + " atualizado com sucesso");
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
}
