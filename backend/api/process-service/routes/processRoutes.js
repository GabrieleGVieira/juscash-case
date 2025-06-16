import { Router } from "express";
import { ProcessController } from "../controllers/processController.js";

const router = Router();
const controller = new ProcessController();

router.get("/", controller.get);
router.patch("/:hash_id/status", controller.update);

export default router;
