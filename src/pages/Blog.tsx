import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Calendar, Clock, Pin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/i18n";
import { getSortedPosts } from "@/content/blog/posts";
import { DATE_LOCALES } from "@/lib/i18n";

export default function Blog() {
  const { lang } = useLang();
  const allPosts = getSortedPosts(lang);

  useEffect(() => {
    document.title = `${t("blog.meta_title", lang)} | Transportes Carlos & César`;
    const desc = t("blog.meta_desc", lang);
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://transportescarlosecesar.com/blog");
  }, [lang]);

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(DATE_LOCALES[lang], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-36 sm:pt-40 bg-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-5">
              <Newspaper className="h-4 w-4 text-primary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                {t("blog.kicker", lang)}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              {t("blog.title", lang)}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              {t("blog.intro", lang)}
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {p.cover ? (
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        width={1280}
                        height={768}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-primary/5">
                        <Newspaper className="h-10 w-10 text-primary/60" />
                      </div>
                    )}
                    {p.pinned && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider shadow-md">
                        <Pin className="h-3 w-3 fill-current" />
                        {t("blog.pinned", lang)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {fmt(p.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {p.readingMinutes} min
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">{p.excerpt}</p>
                    <span className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                      {t("blog.read_article", lang)}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}