import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import subscribeRouter from "./subscribe.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(subscribeRouter);

export default router;
