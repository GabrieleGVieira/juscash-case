import { Router } from 'express';
import { ProcessController } from '../controllers/processController.js';
// import { AuthMiddleware } from '../middlewares/AuthMiddleware.js';

const router = Router();
const controller = new ProcessController();
// const auth = new AuthMiddleware();

// router.get('/', auth.handle, controller.buscar);
// router.patch('/:id/status', auth.handle, controller.atualizar);

router.get('/', controller.get);
router.patch('/:hash_id/status', controller.update);

export default router;
