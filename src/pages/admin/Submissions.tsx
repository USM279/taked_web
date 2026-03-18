import { useEffect, useState } from "react";
import {
  MessageSquare,
  Mail,
  Phone,
  Clock,
  Trash2,
  CheckCircle,
  Circle,
  Search,
  Filter,
  User,
  Briefcase,
  Globe,
} from "lucide-react";
import { AdminLayout } from "../../components/admin/AdminLayout";
import {
  getSubmissions,
  markSubmissionRead,
  deleteSubmission,
  Submission,
} from "../../lib/firestore";

export const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSelect = async (sub: Submission) => {
    setSelected(sub);
    if (!sub.read) {
      await markSubmissionRead(sub.id, true);
      setSubmissions((prev) =>
        prev.map((s) => (s.id === sub.id ? { ...s, read: true } : s))
      );
    }
  };

  const handleToggleRead = async (
    e: React.MouseEvent,
    sub: Submission
  ) => {
    e.stopPropagation();
    await markSubmissionRead(sub.id, !sub.read);
    setSubmissions((prev) =>
      prev.map((s) => (s.id === sub.id ? { ...s, read: !s.read } : s))
    );
    if (selected?.id === sub.id) {
      setSelected((prev) => (prev ? { ...prev, read: !prev.read } : null));
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("هل أنت متأكد من حذف هذا الطلب؟")) return;
    setDeleting(id);
    try {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
    } finally {
      setDeleting(null);
    }
  };

  const filtered = submissions.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search) ||
      s.message.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" ||
      (filter === "unread" && !s.read) ||
      (filter === "read" && s.read);
    return matchSearch && matchFilter;
  });

  const unreadCount = submissions.filter((s) => !s.read).length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">طلبات التواصل</h1>
            <p className="text-gray-500 text-sm mt-1">
              {submissions.length} طلب إجمالاً ·{" "}
              <span className="text-sky-700 font-medium">
                {unreadCount} غير مقروء
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Submissions List */}
          <div className="lg:col-span-2 space-y-3">
            {/* Search & Filter */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="بحث..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-9 pl-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
                />
              </div>
              <select
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value as "all" | "unread" | "read")
                }
                className="border border-gray-200 rounded-xl text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white text-gray-600"
              >
                <option value="all">الكل</option>
                <option value="unread">غير مقروء</option>
                <option value="read">مقروء</option>
              </select>
            </div>

            {/* List */}
            {loading ? (
              <div className="flex items-center justify-center h-48">
                <div className="w-6 h-6 border-3 border-sky-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <MessageSquare className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">لا توجد نتائج</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[calc(100vh-260px)] overflow-y-auto">
                {filtered.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSelect(sub)}
                    className={`bg-white rounded-xl border p-4 cursor-pointer transition-all hover:shadow-sm ${
                      selected?.id === sub.id
                        ? "border-sky-400 ring-1 ring-sky-300"
                        : sub.read
                        ? "border-gray-100"
                        : "border-sky-100 bg-sky-50/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {sub.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm text-gray-900 truncate">
                            {sub.name}
                          </p>
                          {!sub.read && (
                            <span className="w-2 h-2 bg-sky-500 rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-gray-400 truncate">{sub.email}</p>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {sub.message}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400">
                          {sub.createdAt
                            ? new Date(
                                sub.createdAt.seconds * 1000
                              ).toLocaleDateString("ar-AE")
                            : "—"}
                        </span>
                        <div className="flex gap-1">
                          <button
                            onClick={(e) => handleToggleRead(e, sub)}
                            className="text-gray-400 hover:text-sky-600 transition-colors p-0.5"
                            title={sub.read ? "وضع علامة غير مقروء" : "وضع علامة مقروء"}
                          >
                            {sub.read ? (
                              <CheckCircle className="w-3.5 h-3.5" />
                            ) : (
                              <Circle className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            onClick={(e) => handleDelete(e, sub.id)}
                            disabled={deleting === sub.id}
                            className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3">
            {selected ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-20">
                {/* Detail Header */}
                <div className="bg-gradient-to-l from-sky-950 to-sky-800 px-6 py-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {selected.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-white font-semibold text-lg">
                        {selected.name}
                      </h2>
                      <p className="text-sky-200 text-sm">{selected.email}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        selected.locale === "ar"
                          ? "bg-green-400/20 text-green-200"
                          : "bg-blue-400/20 text-blue-200"
                      }`}
                    >
                      {selected.locale === "ar" ? "عربي" : "English"}
                    </span>
                  </div>
                </div>

                {/* Detail Body */}
                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <Mail className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">البريد الإلكتروني</p>
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-sm font-medium text-gray-900 hover:text-sky-700"
                        >
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <Phone className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">رقم الهاتف</p>
                        <a
                          href={`tel:${selected.phone}`}
                          className="text-sm font-medium text-gray-900 hover:text-sky-700"
                          dir="ltr"
                        >
                          {selected.phone}
                        </a>
                      </div>
                    </div>

                    {selected.service && (
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                        <Briefcase className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400">الخدمة المطلوبة</p>
                          <p className="text-sm font-medium text-gray-900">
                            {selected.service}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">تاريخ الإرسال</p>
                        <p className="text-sm font-medium text-gray-900">
                          {selected.createdAt
                            ? new Date(
                                selected.createdAt.seconds * 1000
                              ).toLocaleString("ar-AE")
                            : "—"}
                        </p>
                      </div>
                    </div>

                    {selected.pageUrl && (
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 sm:col-span-2">
                        <Globe className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-gray-400">صفحة المصدر</p>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {selected.pageUrl}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-sky-600" />
                      الرسالة
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                      {selected.message}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2 border-t border-gray-100">
                    <a
                      href={`mailto:${selected.email}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-950 hover:bg-sky-800 text-white py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      رد بالبريد
                    </a>
                    <a
                      href={`https://wa.me/${selected.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      واتساب
                    </a>
                    <button
                      onClick={(e) => handleDelete(e, selected.id)}
                      className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-gray-100 text-gray-400">
                <User className="w-10 h-10 mb-3 opacity-40" />
                <p className="text-sm">اختر طلباً لعرض التفاصيل</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
