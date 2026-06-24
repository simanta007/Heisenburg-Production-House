import nodemailer from "nodemailer";
import type { ContactPayload } from "@fbm/shared";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEnquiryEmail(data: ContactPayload) {
  await transport.sendMail({
    from: `"Heisenburg Site" <${process.env.SMTP_FROM}>`,
    to: process.env.ENQUIRY_TO,
    subject: `New project enquiry — ${data.service} — ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`,
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <hr />
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
