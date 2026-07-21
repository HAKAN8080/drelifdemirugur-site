import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

type PubItem = {
  title: string;
  meta: string;
  href: string;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "publications" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  return { title: `${t("title")} · ${meta("siteName")}` };
}

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("publications");
  const items = t.raw("items") as PubItem[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-cloud-ink md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-cloud-muted">{t("intro")}</p>

      <ol className="mt-12 space-y-10">
        {items.map((item, i) => (
          <li
            key={`${i}-${item.title.slice(0, 40)}`}
            className="border-l-2 border-purple-500/40 pl-5"
          >
            <h2 className="font-[family-name:var(--font-display)] text-xl text-cloud-ink md:text-2xl">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-cloud-muted">{item.meta}</p>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4"
              >
                {t("open")}
              </a>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
