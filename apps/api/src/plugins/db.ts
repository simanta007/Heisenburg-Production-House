import fp from "fastify-plugin";
import postgres from "postgres";
import type { FastifyPluginAsync } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    db: postgres.Sql;
  }
}

const dbPlugin: FastifyPluginAsync = async (app) => {
  const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });
  app.decorate("db", sql);
  app.addHook("onClose", async () => sql.end());
};

export default fp(dbPlugin, { name: "db" });
