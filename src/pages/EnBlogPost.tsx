import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EnNavbar } from "../components/EnNavbar";
import { EnFooter } from "../components/EnFooter";
import { applySeo } from "../lib/seo";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "../lib/firestore";

const readingTime = (text: string) =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

export const EnBlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getBlogPostBySlug(slug, "en")
      .then(async (p) => {
        if (!p) {
          navigate("/en/blog", { replace: true });
          return;
        }
        setPost(p);

        applySeo({
          title: `${p.titleEn} | Taked Blog`,
          description: p.metaDescriptionEn || p.excerptEn || p.titleEn,
          path: `/en/blog/${p.slugEn}`,
          language: "en",
          type: "article",
          alternates: {
            ar: `/ar/blog/${p.slugAr}`,
            en: `/en/blog/${p.slugEn}`,
          },
          breadcrumb: [
            { name: "Home", path: "/en" },
            { name: "Blog", path: "/en/blog" },
            { name: p.titleEn, path: `/en/blog/${p.slugEn}` },
          ],
          article: {
            ogImage: p.imageURL || undefined,
            publishedAt: p.publishedAt
              ? new Date(p.publishedAt.seconds * 1000).toISOString()
              : undefined,
            modifiedAt: p.updatedAt
              ? new Date(p.updatedAt.seconds * 1000).toISOString()
              : undefined,
          },
        });

        const all = await getBlogPosts(true);
        setRelatedPosts(all.filter((x) => x.id !== p.id).slice(0, 3));
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: post?.titleEn, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <EnNavbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-10 h-10 border-4 border-sky-950 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!post) return null;

  const minutes = readingTime(post.contentEn || "");

  return (
    <div className="min-h-screen bg-white">
      <EnNavbar />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50 pt-24 pb-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link to="/en" className="hover:text-sky-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/en/blog" className="hover:text-sky-700 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-800 line-clamp-1">{post.titleEn}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {post.titleEn}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-600" />
                {new Date(post.publishedAt.seconds * 1000).toLocaleDateString(
                  "en-AE",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-600" />
              {minutes} min read
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition-colors ml-auto"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>

          {/* Cover Image */}
          {post.imageURL && (
            <div className="rounded-2xl overflow-hidden aspect-video mb-8 shadow-sm">
              <img
                src={post.imageURL}
                alt={post.titleEn}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          {post.excerptEn && (
            <div className="bg-sky-50 border-l-4 border-sky-700 pl-5 py-4 rounded-r-xl mb-8">
              <p className="text-sky-900 text-base leading-relaxed font-medium">
                {post.excerptEn}
              </p>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-sky max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:text-base
          prose-li:text-gray-700 prose-li:leading-relaxed
          prose-strong:text-gray-900
          prose-a:text-sky-700 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-sky-400 prose-blockquote:bg-sky-50 prose-blockquote:not-italic prose-blockquote:pl-6 prose-blockquote:rounded-r-xl
          prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sky-800 prose-code:text-sm
          prose-img:rounded-xl prose-img:shadow-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.contentEn}
          </ReactMarkdown>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-gradient-to-r from-sky-950 to-sky-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to Set Up Your Business in Dubai?
          </h3>
          <p className="text-sky-200 text-sm mb-5">
            Contact Taked's team for a free consultation
          </p>
          <Link
            to="/en/contact-us"
            className="inline-flex items-center gap-2 bg-white text-sky-950 hover:bg-sky-50 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Back */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link
            to="/en/blog"
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 font-medium text-sm transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-700" />
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/en/blog/${rp.slugEn}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {rp.imageURL ? (
                        <img
                          src={rp.imageURL}
                          alt={rp.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-sky-50">
                          <BookOpen className="w-8 h-8 text-sky-200" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-sky-800 transition-colors">
                        {rp.titleEn}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnFooter />
    </div>
  );
};
