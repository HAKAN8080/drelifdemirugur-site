import { getTranslations, setRequestLocale } from "next-intl/server";
import { Portrait } from "@/components/portrait";

type Props = { params: Promise<{ locale: string }> };

type Honor = {
  title: string;
  issuer: string;
  affiliation?: string;
  description: string;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: `${t("title")} · Dr. Elif Demir Uğur` };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const honors = t.raw("honors") as Honor[];

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-8 md:py-20">
      <Portrait className="aspect-[4/5] w-full rounded-sm shadow-[0_20px_50px_-20px_rgba(26,47,69,0.35)]" />
      <article className="prose-site space-y-10">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-cloud-ink/90">{t("intro")}</p>
        </div>
        <div>
          <h2>{t("titlesHeading")}</h2>
          <p className="!text-cloud-ink font-medium">{t("titles")}</p>
        </div>
        <div>
          <h2>{t("bioHeading")}</h2>
          <p>{t("bio")}</p>
        </div>
        <div>
          <h2>{t("langsHeading")}</h2>
          <p>{t("langs")}</p>
        </div>
        <div>
          <h2>{t("volunteerHeading")}</h2>
          <p>{t("volunteer")}</p>
        </div>
        <div>
          <h2>{t("honorsHeading")}</h2>
          <ul className="mt-5 space-y-5">
            {honors.map((honor) => (
              <li
                key={`${honor.title}-${honor.issuer}`}
                className="border-l-2 border-purple-500/40 pl-4"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-cloud-ink">
                  {honor.title}
                </h3>
                <p className="mt-1 text-sm font-medium !text-purple-600">
                  {honor.issuer}
                </p>
                {honor.affiliation ? (
                  <p className="mt-1 text-sm italic">{honor.affiliation}</p>
                ) : null}
                {honor.description ? (
                  <p className="mt-1 text-sm">{honor.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
