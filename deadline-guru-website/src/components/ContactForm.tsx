
"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const message = [
      `Hello Deadline Guru, my name is ${data.get("name")}.`,
      `Service: ${data.get("service")}.`,
      data.get("deadline")
        ? `Deadline: ${data.get("deadline")}.`
        : "",
      data.get("message")
        ? `Requirements: ${data.get("message")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/918309629331?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />

      <label htmlFor="service">What do you need help with?</label>
      <select
        id="service"
        name="service"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Select a service
        </option>
        <option>Assignment guidance</option>
        <option>Dissertation support</option>
        <option>Final-year project</option>
        <option>Research and editing support</option>
        <option>Other enquiry</option>
      </select>

      <label htmlFor="deadline">Your deadline (optional)</label>
      <input
        id="deadline"
        name="deadline"
        placeholder="e.g. 20 November"
      />

      <label htmlFor="message">
        Briefly describe your requirements
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Subject, course, project details..."
      />

      <button
        className="button button-primary form-submit"
        type="submit"
      >
        Send enquiry on WhatsApp <ArrowUpRight size={18} />
      </button>

      <p className="form-disclaimer">
        Your message will be prepared for WhatsApp. You can review it
        before sending.
      </p>
    </form>
  );
}
