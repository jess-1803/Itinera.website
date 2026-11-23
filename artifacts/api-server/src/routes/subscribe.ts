import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/subscribe", async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body as { email?: unknown };

  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }
  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;

  if (!apiKey || !listId) {
    req.log.error("EmailOctopus credentials not configured");
    res.status(500).json({ error: "Subscription service not configured." });
    return;
  }

  const response = (await globalThis.fetch(
    `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        status: "SUBSCRIBED",
      }),
    }
  )) as unknown as {
    json(): Promise<Record<string, unknown>>;
    ok: boolean;
    status: number;
  };

  const data = await response.json();

  if (!response.ok) {
    const code = typeof data.code === "string" ? data.code : "";
    // Already subscribed is fine — treat as success
    if (code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      res.status(200).json({ ok: true });
      return;
    }
    req.log.warn({ status: response.status, code }, "EmailOctopus API error");
    res.status(502).json({ error: "Could not subscribe. Please try again." });
    return;
  }

  req.log.info({ email }, "New subscriber added to EmailOctopus");
  res.status(200).json({ ok: true });
});

export default router;
