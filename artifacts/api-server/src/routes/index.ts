import { Router } from "express";
import healthRouter from "./health.js";
import subscribeRouter from "./subscribe.js";

const router = Router();

router.use(healthRouter);
router.use(subscribeRouter);

export default router;
