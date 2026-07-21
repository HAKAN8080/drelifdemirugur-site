"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

const EXTERNAL = [
  {
    href: "https://www.linkedin.com/in/dr-elif-demir-u%C4%9Fur-edu-b90b013b/",
    label: "LinkedIn",
  },
  { href: "https://thorius.com.tr", label: "Thorius" },
  { href: "https://kitaplik.thorius.com.tr", label: "Thorius Kitaplık" },
  { href: "https://coaching.thorius.com.tr", label: "Thorius Coaching" },
  { href: "https://academy.thorius.com.tr", label: "Thorius Academy" },
];

export function ContactForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`drelifdemirugur.com — ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`,
    );
    window.location.href = `mailto:info@drelifdemirugur.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-cloud-muted">{t("intro")}</p>
        <p className="mt-3 text-sm text-cloud-muted/80">{t("note")}</p>

        <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl text-cloud-ink">
          {t("linksHeading")}
        </h2>
        <ul className="mt-3 space-y-2">
          {EXTERNAL.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline-offset-4 hover:underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label className="block text-sm">
          <span className="text-cloud-muted">{t("name")}</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-cloud-300 bg-white/70 px-3 py-2 outline-none focus:border-purple-500"
          />
        </label>
        <label className="block text-sm">
          <span className="text-cloud-muted">{t("email")}</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-cloud-300 bg-white/70 px-3 py-2 outline-none focus:border-purple-500"
          />
        </label>
        <label className="block text-sm">
          <span className="text-cloud-muted">{t("message")}</span>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full resize-y border border-cloud-300 bg-white/70 px-3 py-2 outline-none focus:border-purple-500"
          />
        </label>
        <button
          type="submit"
          className="btn-primary mt-2 self-start"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
