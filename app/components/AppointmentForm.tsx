"use client";

import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";

type AppointmentRequest = {
  name: string;
  phone: string;
  preferredDate: string;
  message: string;
};

/** Today in the visitor's own timezone, as the `yyyy-mm-dd` a date input wants. */
function todayAsInputValue() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function AppointmentForm() {
  const { t } = useLanguage();
  const form = t.appointment.form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Applied to the DOM directly rather than rendered, because today's date
  // differs between the server and the visitor's timezone and would otherwise
  // cause a hydration mismatch.
  useEffect(() => {
    const input = dateInputRef.current;
    if (input) input.min = todayAsInputValue();
  }, [isSubmitted]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const request: AppointmentRequest = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    /*
      TODO(backend): There is no backend yet — this only logs to the console,
      so nothing reaches the chamber. Before launch, replace this with a real
      submission (a Next.js Server Action writing to a database, an email via
      Resend/SendGrid, or a WhatsApp/SMS notification) and make sure someone at
      the clinic is actually monitoring wherever the requests land. Until then,
      the phone number beside this form is the only working channel.
    */
    console.log("Appointment request:", request);

    // Stands in for the round-trip a real submission would take.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-ink-200/70"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CircleCheck className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900">
          {form.successTitle}
        </h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-600">
          {form.successBody}
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-accent-700 ring-1 ring-accent-300 transition-colors hover:bg-accent-50"
        >
          {form.another}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink-200/70 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-ink-800"
          >
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={form.namePlaceholder}
            className="mt-2 w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 transition-shadow placeholder:text-ink-400 focus:ring-2 focus:ring-accent-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-ink-800"
          >
            {form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="01XXXXXXXXX"
            className="mt-2 w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 transition-shadow placeholder:text-ink-400 focus:ring-2 focus:ring-accent-500"
          />
        </div>

        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-semibold text-ink-800"
          >
            {form.date}
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            ref={dateInputRef}
            className="mt-2 w-full rounded-xl border-0 bg-ink-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 transition-shadow focus:ring-2 focus:ring-accent-500"
          />
          <p className="mt-2 text-sm text-ink-500">{form.dateHint}</p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-ink-800"
          >
            {form.message}{" "}
            <span className="font-normal text-ink-500">{form.optional}</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={form.messagePlaceholder}
            className="mt-2 w-full resize-y rounded-xl border-0 bg-ink-50 px-4 py-3 text-base text-ink-900 ring-1 ring-ink-200 transition-shadow placeholder:text-ink-400 focus:ring-2 focus:ring-accent-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-600/20 transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
            {form.sending}
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden="true" />
            {form.submit}
          </>
        )}
      </button>

      <p className="mt-4 text-center text-sm text-ink-500">{form.noConfirm}</p>
    </form>
  );
}
