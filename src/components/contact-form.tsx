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
  { href: "https://medium.com/@theevolvedwoman", label: "Medium" },
];

// Moderation blocklist (Turkish + English profanity/insults). Matched per
// token after Turkish-aware lowercasing; longer entries also match as
// prefixes to catch suffixed forms (e.g. "şerefsizsin").
const BLOCKLIST = [
  "amk",
  "aq",
  "oç",
  "orospu",
  "oruspu",
  "piç",
  "sik",
  "sikeyim",
  "sikerim",
  "siktir",
  "sikik",
  "yarrak",
  "yarak",
  "göt",
  "götveren",
  "ibne",
  "ipne",
  "pezevenk",
  "kahpe",
  "sürtük",
  "gavat",
  "amcık",
  "amcik",
  "salak",
  "gerizekalı",
  "gerizekali",
  "aptal",
  "şerefsiz",
  "serefsiz",
  "haysiyetsiz",
  "ahlaksız",
  "ahlaksiz",
  "dangalak",
  "yavşak",
  "puşt",
  "kaltak",
  "godoş",
  "ananı",
  "anani",
  "avradını",
  "bok",
  "dallama",
  "hödük",
  "fuck",
  "fucking",
  "shit",
  "bitch",
  "asshole",
  "bastard",
  "cunt",
  "whore",
  "slut",
  "motherfucker",
  "dick",
  "idiot",
  "moron",
];

function containsBlockedWord(text: string) {
  const tokens = text
    .toLocaleLowerCase("tr-TR")
    .split(/[^\p{L}]+/u)
    .filter(Boolean);
  return tokens.some((token) =>
    BLOCKLIST.some((word) =>
      word.length >= 5 ? token.startsWith(word) : token === word,
    ),
  );
}

function looksLikeSpam(message: string) {
  const trimmed = message.trim();
  if (trimmed.length < 10) return true;
  const urls = trimmed.match(/https?:\/\/|www\./gi);
  if (urls && urls.length >= 3) return true;
  // Same character repeated 8+ times in a row.
  if (/(.)\1{7,}/u.test(trimmed)) return true;
  return false;
}

export function ContactForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [blocked, setBlocked] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      containsBlockedWord(name) ||
      containsBlockedWord(message) ||
      looksLikeSpam(message)
    ) {
      setBlocked(true);
      return;
    }
    setBlocked(false);
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
            onChange={(e) => {
              setName(e.target.value);
              setBlocked(false);
            }}
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
            onChange={(e) => {
              setMessage(e.target.value);
              setBlocked(false);
            }}
            className="mt-1 w-full resize-y border border-cloud-300 bg-white/70 px-3 py-2 outline-none focus:border-purple-500"
          />
        </label>
        {blocked && (
          <p role="alert" className="text-sm text-red-600">
            {t("blockedError")}
          </p>
        )}
        <button
          type="submit"
          className="btn-primary mt-2 self-start"
        >
          {t("submit")}
        </button>
        <p className="mt-4 text-base text-cloud-muted/70">{t("legalNotice")}</p>
      </form>
    </div>
  );
}
