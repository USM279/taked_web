import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PenSquare,
  Trash2,
  Eye,
  EyeOff,
  Plus,
  FileText,
  Search,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { AdminLayout } from "../../components/admin/AdminLayout";
import {
  getBlogPosts,
  deleteBlogPost,
  updateBlogPost,
  BlogPost,
} from "../../lib/firestore";

export const AdminBlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getBlogPosts(false);
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا المقال؟ لا يمكن التراجع.")) return;
    setDeleting(id);
    try {
      await deleteBlogPost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } finally {
      setDeleting(null);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    setToggling(post.id);
    try {
      await updateBlogPost(post.id, { published: !post.published });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, published: !p.published } : p
        )
      );
    } finally {
      setToggling(null);
    }
  };

  const filtered = posts.filter(
    (p) =>
      p.titleAr.toLowerCase().includes(search.toLowerCase()) ||
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.slugAr.toLowerCase().includes(search.toLowerCase())
  );

  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">المقالات</h1>
            <p className="text-gray-500 text-sm mt-1">
              {posts.length} مقال ·{" "}
              <span className="text-green-600 font-medium">{publishedCount} منشور</span>
              {" · "}
              <span className="text-gray-400">{draftCount} مسودة</span>
            </p>
          </div>
          <Link
            to="/admin/blog/new"
            className="flex items-center gap-2 bg-sky-950 hover:bg-sky-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            مقال جديد
          </Link>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن مقال..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-11 pl-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-sky-950 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-gray-100">
            <FileText className="w-12 h-12 text-gray-200 mb-4" />
            <p className="text-gray-500 font-medium mb-2">لا توجد مقالات بعد</p>
            <p className="text-gray-400 text-sm mb-6">
              ابدأ بكتابة أول مقال لتحسين ظهور موقعك في Google
            </p>
            <Link
              to="/admin/blog/new"
              className="flex items-center gap-2 bg-sky-950 text-white px-6 py-2.5 rounded-xl text-sm hover:bg-sky-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              إنشاء أول مقال
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all group"
              >
                {/* Cover Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  {post.imageURL ? (
                    <img
                      src={post.imageURL}
                      alt={post.titleAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileText className="w-10 h-10 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        post.published
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.published ? "منشور" : "مسودة"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 mb-1">
                    {post.titleAr}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-1 mb-3">
                    {post.titleEn}
                  </p>

                  {post.excerptAr && (
                    <p className="text-gray-600 text-xs line-clamp-2 mb-3 leading-relaxed">
                      {post.excerptAr}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt
                      ? new Date(
                          post.publishedAt.seconds * 1000
                        ).toLocaleDateString("ar-AE")
                      : post.updatedAt
                      ? `آخر تعديل: ${new Date(
                          post.updatedAt.seconds * 1000
                        ).toLocaleDateString("ar-AE")}`
                      : "—"}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <Link
                      to={`/admin/blog/${post.id}`}
                      className="flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 px-3 py-1.5 rounded-lg text-xs transition-colors flex-1 justify-center"
                    >
                      <PenSquare className="w-3 h-3" />
                      تعديل
                    </Link>
                    <button
                      onClick={() => handleTogglePublish(post)}
                      disabled={toggling === post.id}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                        post.published
                          ? "bg-orange-50 hover:bg-orange-100 text-orange-600"
                          : "bg-green-50 hover:bg-green-100 text-green-600"
                      }`}
                    >
                      {post.published ? (
                        <>
                          <EyeOff className="w-3 h-3" />
                          إخفاء
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" />
                          نشر
                        </>
                      )}
                    </button>
                    {post.published && (
                      <Link
                        to={`/ar/blog/${post.slugAr}`}
                        target="_blank"
                        className="flex items-center justify-center p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={deleting === post.id}
                      className="flex items-center justify-center p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};
