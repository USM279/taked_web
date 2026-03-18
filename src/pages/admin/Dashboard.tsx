import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  MessageSquare,
  Eye,
  TrendingUp,
  PenSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import { AdminLayout } from "../../components/admin/AdminLayout";
import { getBlogPosts, getSubmissions, BlogPost, Submission } from "../../lib/firestore";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  sub,
}: {
  title: string;
  value: number | string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  sub?: string;
}) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  </div>
);

export const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [p, s] = await Promise.all([
          getBlogPosts(false),
          getSubmissions(),
        ]);
        setPosts(p);
        setSubmissions(s);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const publishedPosts = posts.filter((p) => p.published).length;
  const draftPosts = posts.filter((p) => !p.published).length;
  const unreadSubmissions = submissions.filter((s) => !s.read).length;

  const recentSubmissions = submissions.slice(0, 5);
  const recentPosts = posts.slice(0, 4);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-sky-950 border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مرحباً بك 👋</h1>
          <p className="text-gray-500 text-sm mt-1">
            هذا ملخص لوضع الموقع الحالي
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            title="إجمالي المقالات"
            value={posts.length}
            icon={FileText}
            color="bg-sky-50 text-sky-700"
            sub={`${publishedPosts} منشور · ${draftPosts} مسودة`}
          />
          <StatCard
            title="المقالات المنشورة"
            value={publishedPosts}
            icon={Eye}
            color="bg-green-50 text-green-700"
            sub="متاحة للزوار الآن"
          />
          <StatCard
            title="طلبات التواصل"
            value={submissions.length}
            icon={MessageSquare}
            color="bg-amber-50 text-amber-700"
            sub={`${unreadSubmissions} غير مقروء`}
          />
          <StatCard
            title="غير مقروء"
            value={unreadSubmissions}
            icon={TrendingUp}
            color="bg-red-50 text-red-600"
            sub="طلبات تحتاج متابعة"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/admin/blog/new"
            className="flex items-center gap-4 bg-gradient-to-l from-sky-950 to-sky-800 text-white rounded-2xl p-6 hover:opacity-90 transition-opacity group"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <PenSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-lg">كتابة مقال جديد</p>
              <p className="text-sky-200 text-sm">أضف محتوى يحسّن ترتيبك في Google</p>
            </div>
          </Link>
          <Link
            to="/admin/submissions"
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:border-sky-300 transition-colors group"
          >
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-100 transition-colors">
              <MessageSquare className="w-6 h-6 text-sky-700" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900">مراجعة الطلبات</p>
              <p className="text-gray-400 text-sm">
                {unreadSubmissions > 0
                  ? `${unreadSubmissions} طلبات تحتاج مراجعة`
                  : "لا توجد طلبات جديدة"}
              </p>
            </div>
          </Link>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Recent Submissions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-700" />
                آخر الطلبات
              </h2>
              <Link
                to="/admin/submissions"
                className="text-xs text-sky-700 hover:underline"
              >
                عرض الكل
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {recentSubmissions.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-8">
                  لا توجد طلبات بعد
                </p>
              ) : (
                recentSubmissions.map((sub) => (
                  <div key={sub.id} className="px-6 py-4 flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        sub.read ? "bg-gray-300" : "bg-sky-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {sub.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{sub.email}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {sub.createdAt
                        ? new Date(
                            sub.createdAt.seconds * 1000
                          ).toLocaleDateString("ar-AE")
                        : "—"}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-700" />
                آخر المقالات
              </h2>
              <Link
                to="/admin/blog"
                className="text-xs text-sky-700 hover:underline"
              >
                عرض الكل
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {recentPosts.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-8">
                  لا توجد مقالات بعد
                </p>
              ) : (
                recentPosts.map((post) => (
                  <div key={post.id} className="px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      {post.imageURL ? (
                        <img
                          src={post.imageURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {post.titleAr}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {post.titleEn}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                        post.published
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {post.published ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          منشور
                        </span>
                      ) : (
                        "مسودة"
                      )}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
