import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Stage = { title: string; body: string };

export async function StudentCoachingContent() {
  const t = await getTranslations("studentCoaching");
  const areas = t.raw("areas") as string[];
  const stages = t.raw("stages") as Stage[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <Link
        href="/coaching"
        className="text-sm font-medium text-cloud-muted transition hover:text-purple-600"
      >
        {t("backLink")}
      </Link>

      <p className="mt-8 text-sm font-medium tracking-[0.16em] text-purple-600 uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-cloud-muted">{t("intro")}</p>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("areasHeading")}
        </h2>
        <ul className="mt-6 space-y-3 text-cloud-muted">
          {areas.map((item) => (
            <li key={item} className="border-l-2 border-purple-500/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-cloud-200 pt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-cloud-ink md:text-3xl">
          {t("stagesHeading")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="border border-cloud-200/90 bg-white/40 px-4 py-5"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl text-cloud-ink">
                {stage.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cloud-muted">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 text-[0.95rem] leading-relaxed text-cloud-muted">
        {t.rich("contactLine", {
          link: (chunks) => (
            <Link
              href="/contact"
              className="text-purple-600 underline-offset-4 hover:underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </div>
  );
}
