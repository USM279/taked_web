import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen, Search } from "lucide-react";
import { EnNavbar } from "../components/EnNavbar";
import { EnFooter } from "../components/EnFooter";
import { applySeo } from "../lib/seo";
import { getBlogPosts, BlogPost } from "../lib/firestore";

export const EnBlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    applySeo({
      title: "Blog | Taked — Business Setup Services in Dubai",
      description:
        "Read the latest articles and complete guides on company formation, trade licenses, and investor visas in the UAE.",
      path: "/en/blog",
      language: "en",
      keywords:
        "Dubai company setup blog, UAE trade license, investor visa, government services",
      alternates: {
        ar: "/ar/blog",
        en: "/en/blog",
      },
      breadcrumb: [
        { name: "Home", path: "/en" },
        { name: "Blog", path: "/en/blog" },
      ],
    });

    getBlogPosts(true)
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(
    (p) =>
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.excerptEn?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <EnNavbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-sky-200 px-4 py-2 rounded-full text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              Taked Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Your Complete Guide to
              <span className="text-sky-300"> Business in the UAE</span>
            </h1>
            <p className="text-sky-200 text-lg leading-relaxed mb-8">
              Expert articles on company formation, trade licenses, investor
              visas, and everything you need to start your business in Dubai.
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-10 h-10 border-4 border-sky-950 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <BookOpen className="w-16 h-16 text-gray-200 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {search ? "No results found" : "No articles yet"}
            </h2>
            <p className="text-gray-400 text-sm">
              {search ? "Try a different search term" : "Articles coming soon"}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">
                {search
                  ? `Search Results (${filtered.length})`
                  : `Latest Articles (${filtered.length})`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured first post */}
              {filtered.length > 0 && !search && (
                <Link
                  to={`/en/blog/${filtered[0].slugEn}`}
                  className="md:col-span-2 lg:col-span-2 group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col md:flex-row">
                    <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden bg-gray-100 flex-shrink-0">
                      {filtered[0].imageURL ? (
                        <img
                          src={filtered[0].imageURL}
                          alt={filtered[0].titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-100">
                          <BookOpen className="w-12 h-12 text-sky-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs font-medium w-fit mb-4">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                        Featured
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-sky-800 transition-colors line-clamp-2">
                        {filtered[0].titleEn}
                      </h3>
                      {filtered[0].excerptEn && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                          {filtered[0].excerptEn}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {filtered[0].publishedAt
                            ? new Date(filtered[0].publishedAt.seconds * 1000).toLocaleDateString("en-AE", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : ""}
                        </div>
                        <span className="flex items-center gap-1 text-sky-700 text-sm font-medium ml-auto group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )}

              {/* Rest of posts */}
              {(search ? filtered : filtered.slice(1)).map((post) => (
                <Link
                  key={post.id}
                  to={`/en/blog/${post.slugEn}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden bg-gray-100 flex-shrink-0">
                      {post.imageURL ? (
                        <img
                          src={post.imageURL}
                          alt={post.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-50">
                          <BookOpen className="w-10 h-10 text-sky-200" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-900 text-base leading-tight mb-2 group-hover:text-sky-800 transition-colors line-clamp-2">
                        {post.titleEn}
                      </h3>
                      {post.excerptEn && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                          {post.excerptEn}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          {post.publishedAt
                            ? new Date(post.publishedAt.seconds * 1000).toLocaleDateString("en-AE")
                            : ""}
                        </div>
                        <span className="flex items-center gap-1 text-sky-700 text-xs font-medium group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Have Questions About Setting Up Your Business?
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Taked's team is available to answer all your questions and provide
            the right consultation.
          </p>
          <Link
            to="/en/contact-us"
            className="inline-flex items-center gap-2 bg-sky-950 hover:bg-sky-800 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Contact Us Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <EnFooter />
    </div>
  );
};
