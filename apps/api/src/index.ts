import Fastify from "fastify";
import * as Sentry from "@sentry/node";
import dbPlugin from "./plugins/db.js";
import corsPlugin from "./plugins/cors.js";
import sessionPlugin from "./plugins/session.js";
import contactRoute from "./routes/contact.js";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV ?? "development",
});

const app = Fastify({
  logger: {
    level: process.env.LOG_LEVEL ?? "info",
  },
});

await app.register(corsPlugin);
await app.register(sessionPlugin);
await app.register(dbPlugin);
await app.register(contactRoute);

app.get("/health", async () => ({ ok: true }));

const port = Number(process.env.PORT ?? 3001);
try {
  await app.listen({ port, host: "0.0.0.0" });
} catch (err) {
  Sentry.captureException(err);
  app.log.error(err);
  process.exit(1);
}
