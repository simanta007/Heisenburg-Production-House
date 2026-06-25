import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ContactSchema, type ContactPayload, type ServiceTypeValue } from "@fbm/shared";
import { useReveal } from "../../../hooks/useReveal.ts";
import "./Contact.css";

const SERVICE_LABELS: Record<ServiceTypeValue, string> = {
  "full-production": "Full Production",
  "video-editing": "Video Editing",
  "digital-marketing": "Digital Marketing",
  "ai-automation": "AI Automation",
};

const API_BASE = import.meta.env.VITE_API_URL ?? "";

async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(body?.message ?? "Something went wrong");
  }
  return res.json();
}

export default function Contact() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  const [form, setForm] = useState<Partial<ContactPayload>>({
    service: "full-production",
  });
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});

  const mutation = useMutation({ mutationFn: submitContact });

  function set<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setFieldErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = ContactSchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setFieldErrors(
        Object.fromEntries(
          Object.entries(flat).map(([k, v]) => [k, v?.[0]])
        ) as Partial<Record<keyof ContactPayload, string>>
      );
      return;
    }
    mutation.mutate(parsed.data);
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-inner">
        <div ref={leftRef} className="reveal">
          <span className="eyebrow">06 — Let's roll</span>
          <h2>
            Got footage
            <br />
            or a story?
          </h2>
          <p>
            Tell us what you're making. We'll come back with a plan and a quote
            — usually within a day.
          </p>
          <div className="contact-info">
            <div className="ci-row">
              <span className="k">EMAIL</span>
              <a href="mailto:hello@heisenburg.io">hello@heisenburg.io</a>
            </div>
            <div className="ci-row">
              <span className="k">BASED</span>
              <span>Cyprus · working worldwide</span>
            </div>
            <div className="ci-row">
              <span className="k">SOCIAL</span>
              <span>@heisenburg</span>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="contact-card reveal">
          {mutation.isSuccess ? (
            <div className="sent">
              <div className="sent-check">✓</div>
              <p>Message received. We'll be in touch within a day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name ?? ""}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={!!fieldErrors.name}
                />
                {fieldErrors.name && (
                  <span className="err">{fieldErrors.name}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email ?? ""}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!fieldErrors.email}
                />
                {fieldErrors.email && (
                  <span className="err">{fieldErrors.email}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="cf-service">Service</label>
                <select
                  id="cf-service"
                  value={form.service ?? "full-production"}
                  onChange={(e) =>
                    set("service", e.target.value as ServiceTypeValue)
                  }
                >
                  {(
                    Object.entries(SERVICE_LABELS) as [ServiceTypeValue, string][]
                  ).map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="cf-msg">Message</label>
                <textarea
                  id="cf-msg"
                  rows={4}
                  placeholder="Tell us about your project…"
                  value={form.message ?? ""}
                  onChange={(e) => set("message", e.target.value)}
                  aria-invalid={!!fieldErrors.message}
                />
                {fieldErrors.message && (
                  <span className="err">{fieldErrors.message}</span>
                )}
              </div>

              {mutation.isError && (
                <p className="err submit-err">
                  {(mutation.error as Error).message}
                </p>
              )}

              <button
                type="submit"
                className="btn"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Sending…" : "Start a project →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
