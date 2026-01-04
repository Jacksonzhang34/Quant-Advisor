import Fastify from "fastify";
import { z } from "zod";

const envSchema = z.object({
  API_PORT: z.coerce.number().default(4000),
});

const env = envSchema.parse(process.env);

const app = Fastify({ logger: true });

app.get("/health", async () => ({ ok: true }));

// Plaid endpoints (stubbed for now; wired in next steps)
app.post("/plaid/link-token", async () => {
  return {
    message: "TODO: implement Plaid link token creation",
  };
});

app.post("/plaid/exchange-public-token", async () => {
  return {
    message: "TODO: implement Plaid public_token exchange",
  };
});

app.post("/plaid/webhook", async () => {
  return { ok: true };
});

await app.listen({ port: env.API_PORT, host: "0.0.0.0" });


