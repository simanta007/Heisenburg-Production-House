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

export function buildApp() {
  const app = Fastify({
    logger: {
      level: process.env.LOG_LEVEL ?? "info",
    },
  });

  app.register(corsPlugin);
  app.register(sessionPlugin);
  app.register(dbPlugin);
  app.register(contactRoute);

  app.get("/health", async () => ({ ok: true }));

  return app;
}
