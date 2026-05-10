import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MessageCircle, Phone, ArrowRight, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LangContext";
import { t, DATE_LOCALES } from "@/lib/i18n";
import { getPostBySlug, getSortedPosts } from "@/content/blog/posts";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const { lang } = useLang();
  const post = getPostBySlug(slug, lang);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Transportes Carlos & César`;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", post.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://transportescarlosecesar.com/blog/${post.slug}`,
    );

    // JSON-LD Article schema
    const ldId = "blog-post-jsonld";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      dateModified: post.date,
      ...(post.cover
        ? { image: [`https://transportescarlosecesar.com${post.cover}`] }
        : {}),
      author: {
        "@type": "Organization",
        name: "Transportes Carlos & César",
      },
      publisher: {
        "@type": "Organization",
        name: "Transportes Carlos & César",
        logo: {
          "@type": "ImageObject",
          url: "https://transportescarlosecesar.com/logo-og.png",
        },
      },
      mainEntityOfPage: `https://transportescarlosecesar.com/blog/${post.slug}`,
    });

    return () => {
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(DATE_LOCALES[lang], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const others = getSortedPosts(lang).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <article className="pt-24 sm:pt-28">
          {/* Header */}
          <header className="max-w-3xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("blog.back", lang)}
            </Link>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {fmt(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} min
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">{post.excerpt}</p>
          </header>

          {/* Cover */}
          {post.cover && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[16/9] bg-muted">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  width={1280}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Body */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="prose-blog">{post.content()}</div>

            {/* CTA */}
            <aside className="mt-12 sm:mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold mb-2">
                {t("blog.cta_title", lang)}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xl mx-auto">
                {t("blog.cta_desc", lang)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/352621152128?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20transporte%20entre%20Portugal%20e%20Luxemburgo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("blog.cta_quote", lang)}
                </a>
                <Link
                  to="/#contactos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/50 font-semibold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {t("blog.cta_contact", lang)}
                </Link>
              </div>
            </aside>
          </div>

          {/* Other posts */}
          {others.length > 0 && (
            <section className="section-padding mt-12 sm:mt-16 bg-surface">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center">
                  {t("blog.more_articles", lang)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
                  {others.map((p) => (
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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-primary/5">
                            <Newspaper className="h-8 w-8 text-primary/60" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                        <span className="mt-auto text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                          {t("blog.read_article", lang)}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}