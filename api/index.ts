import type { IncomingMessage, ServerResponse } from "http";
import { buildApp } from "../apps/api/src/app.js";

const app = buildApp();
const readyPromise = app.ready();

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  await readyPromise;
  app.server.emit("request", req, res);
}
