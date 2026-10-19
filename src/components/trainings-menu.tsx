"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  allTrainingsHref,
  trainingFamilies,
  trainingFamilyHref,
  trainingProgramHref,
  type LocalizedText,
} from "@/content/trainings";

function text(value: LocalizedText, locale: string) {
  return locale === "en" ? value.en : value.tr;
}

export function TrainingsMenu() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const pinned = useRef(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        pinned.current = false;
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        pinned.current = false;
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function canHover() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function close() {
    pinned.current = false;
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className="inline-flex"
      onMouseEnter={() => {
        if (canHover()) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!pinned.current) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 transition hover:text-purple-600 ${
          open ? "text-purple-600" : ""
        }`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setOpen((current) => {
            pinned.current = !current;
            return !current;
          });
        }}
      >
        {t("trainings")}
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <div
          id={menuId}
          className="absolute top-full right-0 left-0 z-30 border-b border-cloud-200 bg-white/95 shadow-[0_24px_40px_-28px_rgba(26,47,69,0.45)] backdrop-blur-md"
        >
          <div className="mx-auto max-h-[min(32rem,70vh)] max-w-6xl overflow-y-auto px-5 py-5 md:px-8">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-cloud-200/80 pb-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl text-cloud-ink">
                  {t("trainings")}
                </p>
                <p className="text-sm text-cloud-muted">{t("trainingsIntro")}</p>
              </div>
              <a
                href={allTrainingsHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
                onClick={close}
              >
                {t("trainingsAll")}
                <span className="sr-only"> {t("trainingsNewTab")}</span>
                <span aria-hidden="true"> →</span>
              </a>
            </div>

            <div className="flex flex-col gap-6">
              {trainingFamilies.map((family) => (
                <section key={family.id}>
                  <a
                    href={trainingFamilyHref(family.anchor)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                    onClick={close}
                  >
                    <h2 className="font-[family-name:var(--font-display)] text-lg text-cloud-ink group-hover:text-purple-600">
                      {text(family.title, locale)}
                      <span className="sr-only"> {t("trainingsNewTab")}</span>
                      <span aria-hidden="true"> →</span>
                    </h2>
                    <p className="mt-0.5 text-sm text-cloud-muted">
                      {text(family.summary, locale)}
                    </p>
                  </a>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {family.programs.map((program) => (
                      <li key={program.slug}>
                        <a
                          href={trainingProgramHref(program.slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-full flex-col rounded-xl border border-cloud-200 bg-white px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-100/40"
                          onClick={close}
                        >
                          <span className="text-sm font-semibold text-cloud-ink">
                            {text(program.title, locale)}
                            <span className="sr-only"> {t("trainingsNewTab")}</span>
                          </span>
                          <span className="mt-1 text-xs leading-relaxed text-cloud-muted">
                            {text(program.summary, locale)}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
