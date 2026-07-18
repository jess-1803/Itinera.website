import { Router, type Request, type Response as ExpressResponse } from "express";

const router = Router();

router.get("/healthz", (_req: Request, res: ExpressResponse) => {
  res.json({ status: "ok" });
});

export default router;
