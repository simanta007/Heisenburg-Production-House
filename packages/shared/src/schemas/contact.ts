import { z } from "zod";

export const ServiceType = z.enum([
  "full-production",
  "video-editing",
  "digital-marketing",
  "ai-automation",
]);

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email required"),
  service: ServiceType,
  message: z.string().min(10, "Tell us a bit more").max(2000),
});

export type ContactPayload = z.infer<typeof ContactSchema>;
export type ServiceTypeValue = z.infer<typeof ServiceType>;
