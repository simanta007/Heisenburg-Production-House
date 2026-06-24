import fp from "fastify-plugin";
import cookie from "@fastify/cookie";
import session from "@fastify/session";
import type { FastifyPluginAsync } from "fastify";

const sessionPlugin: FastifyPluginAsync = async (app) => {
  await app.register(cookie);
  await app.register(session, {
    secret: process.env.SESSION_SECRET!,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    },
  });
};

export default fp(sessionPlugin, { name: "session" });
