import { AuthService } from '../services/authService.js';

export class AuthController {
  constructor() {
    this.service = new AuthService();
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await this.service.login({email, password})
      res.status(200).json(token);
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  };

  register = async (req, res) => {
    try {
      const email = req.body.email
      const fullName = req.body.fullName
      const password = req.body.password
      await this.service.createUser({email, fullName, password});
      res.status(201).json("Usuário criado com sucesso");
    } catch (error) {
      res.status(error.status || 500).json({ error: error.message });
    }
  };
}
