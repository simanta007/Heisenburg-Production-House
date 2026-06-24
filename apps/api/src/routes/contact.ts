import type { FastifyPluginAsync } from "fastify";
import { ContactSchema } from "@fbm/shared";
import { sendEnquiryEmail } from "../jobs/sendEmail.js";

const contactRoute: FastifyPluginAsync = async (app) => {
  app.post("/api/contact", async (request, reply) => {
    const parsed = ContactSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(422).send({ errors: parsed.error.flatten().fieldErrors });
    }

    const { name, email, service, message } = parsed.data;

    await app.db`
      INSERT INTO enquiries (name, email, service, message)
      VALUES (${name}, ${email}, ${service}, ${message})
    `;

    await sendEnquiryEmail(parsed.data).catch((err) =>
      app.log.error({ err }, "Failed to send enquiry email")
    );

    return reply.status(201).send({ ok: true });
  });
};

export default contactRoute;
