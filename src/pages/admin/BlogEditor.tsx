import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Save,
  Upload,
  Eye,
  X,
  ArrowRight,
  ImageIcon,
  Globe,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { AdminLayout } from "../../components/admin/AdminLayout";
import {
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  uploadBlogImage,
  BlogPost,
} from "../../lib/firestore";

type FormData = {
  titleAr: string;
  titleEn: string;
  slugAr: string;
  slugEn: string;
  contentAr: string;
  contentEn: string;
  excerptAr: string;
  excerptEn: string;
  metaDescriptionAr: string;
  metaDescriptionEn: string;
  imageURL: string;
  published: boolean;
};

const EMPTY_FORM: FormData = {
  titleAr: "",
  titleEn: "",
  slugAr: "",
  slugEn: "",
  contentAr: "",
  contentEn: "",
  excerptAr: "",
  excerptEn: "",
  metaDescriptionAr: "",
  metaDescriptionEn: "",
  imageURL: "",
  published: false,
};

const toSlug = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .replace(/[\s\u0600-\u06ff]+/g, "-")
    .replace(/[^a-z0-9\u0600-\u06ff-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = !id || id === "new";

  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"ar" | "en">("ar");
  const [preview, setPreview] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isNew && id) {
      getBlogPostById(id)
        .then((post) => {
          if (post) {
            setForm({
              titleAr: post.titleAr,
              titleEn: post.titleEn,
              slugAr: post.slugAr,
              slugEn: post.slugEn,
              contentAr: post.contentAr,
              contentEn: post.contentEn,
              excerptAr: post.excerptAr,
              excerptEn: post.excerptEn,
              metaDescriptionAr: post.metaDescriptionAr,
              metaDescriptionEn: post.metaDescriptionEn,
              imageURL: post.imageURL,
              published: post.published,
            });
          }
        })
        .finally(() => setLoading(false));
    }
  }, [id, isNew]);

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleTitleArChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setForm((prev) => ({
      ...prev,
      titleAr: val,
      slugAr: prev.slugAr || toSlug(val),
    }));
  };

  const handleTitleEnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setForm((prev) => ({
      ...prev,
      titleEn: val,
      slugEn: prev.slugEn || toSlug(val),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast("error", "حجم الصورة يجب ألا يتجاوز 5 ميجابايت");
      return;
    }

    setUploading(true);
    try {
      const tempId = id && !isNew ? id : `temp_${Date.now()}`;
      const url = await uploadBlogImage(file, tempId);
      setForm((prev) => ({ ...prev, imageURL: url }));
      showToast("success", "تم رفع الصورة بنجاح");
    } catch {
      showToast("error", "فشل رفع الصورة، حاول مرة أخرى");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (publish?: boolean) => {
    if (!form.titleAr.trim()) {
      showToast("error", "العنوان بالعربي مطلوب");
      return;
    }
    if (!form.slugAr.trim()) {
      showToast("error", "الرابط المختصر بالعربي مطلوب");
      return;
    }

    setSaving(true);
    try {
      const data = {
        ...form,
        published: publish !== undefined ? publish : form.published,
        slugAr: toSlug(form.slugAr),
        slugEn: toSlug(form.slugEn || form.slugAr),
      };

      if (isNew) {
        const newId = await createBlogPost(data);
        showToast("success", "تم حفظ المقال بنجاح");
        navigate(`/admin/blog/${newId}`, { replace: true });
      } else {
        await updateBlogPost(id!, data);
        setForm(data);
        showToast("success", "تم تحديث المقال بنجاح");
      }
    } catch {
      showToast("error", "حدث خطأ أثناء الحفظ");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-sky-950" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          {toast.msg}
        </div>
      )}

      <div className="space-y-6 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/blog")}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {isNew ? "مقال جديد" : "تعديل المقال"}
              </h1>
              <p className="text-gray-400 text-xs">
                {form.slugAr ? `/${form.slugAr}` : "الرابط المختصر سيظهر هنا"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm text-gray-600 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {preview ? "إخفاء المعاينة" : "معاينة"}
            </button>
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm text-gray-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              حفظ كمسودة
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="flex items-center gap-2 bg-sky-950 hover:bg-sky-800 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              نشر المقال
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-4">
            {/* Language Tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab("ar")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === "ar"
                      ? "bg-sky-50 text-sky-800 border-b-2 border-sky-700"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  العربية
                </button>
                <button
                  onClick={() => setActiveTab("en")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === "en"
                      ? "bg-sky-50 text-sky-800 border-b-2 border-sky-700"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  English
                </button>
              </div>

              <div className="p-6 space-y-5" dir={activeTab === "ar" ? "rtl" : "ltr"}>
                {/* Title */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {activeTab === "ar" ? "العنوان" : "Title"}
                    <span className="text-red-500 mr-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name={activeTab === "ar" ? "titleAr" : "titleEn"}
                    value={activeTab === "ar" ? form.titleAr : form.titleEn}
                    onChange={
                      activeTab === "ar"
                        ? handleTitleArChange
                        : handleTitleEnChange
                    }
                    placeholder={
                      activeTab === "ar"
                        ? "مثال: كيفية تأسيس شركة في دبي"
                        : "Example: How to setup a company in Dubai"
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {activeTab === "ar" ? "الرابط المختصر" : "Slug (URL)"}
                  </label>
                  <div className="relative">
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      /blog/
                    </span>
                    <input
                      type="text"
                      name={activeTab === "ar" ? "slugAr" : "slugEn"}
                      value={activeTab === "ar" ? form.slugAr : form.slugEn}
                      onChange={handleChange}
                      placeholder={activeTab === "ar" ? "تاسيس-شركة-دبي" : "setup-company-dubai"}
                      className="w-full pr-16 pl-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 font-mono"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {activeTab === "ar" ? "المقتطف (يظهر في قائمة المقالات)" : "Excerpt (shown in blog listing)"}
                  </label>
                  <textarea
                    name={activeTab === "ar" ? "excerptAr" : "excerptEn"}
                    value={activeTab === "ar" ? form.excerptAr : form.excerptEn}
                    onChange={handleChange}
                    rows={2}
                    placeholder={activeTab === "ar" ? "ملخص قصير للمقال..." : "Short summary of the article..."}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    {activeTab === "ar" ? "المحتوى" : "Content"}
                    <span className="text-gray-400 text-xs font-normal mr-2">
                      {activeTab === "ar" ? "(يدعم Markdown)" : "(supports Markdown)"}
                    </span>
                  </label>
                  <textarea
                    name={activeTab === "ar" ? "contentAr" : "contentEn"}
                    value={activeTab === "ar" ? form.contentAr : form.contentEn}
                    onChange={handleChange}
                    rows={16}
                    placeholder={
                      activeTab === "ar"
                        ? "# عنوان رئيسي\n\nاكتب محتوى المقال هنا...\n\n## عنوان فرعي\n\n- نقطة أولى\n- نقطة ثانية"
                        : "# Main Heading\n\nWrite your article content here...\n\n## Sub Heading\n\n- First point\n- Second point"
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 font-mono leading-relaxed resize-none"
                  />
                  <p className="text-xs text-gray-400">
                    {activeTab === "ar"
                      ? `${(form.contentAr || "").length} حرف`
                      : `${(form.contentEn || "").length} characters`}
                  </p>
                </div>
              </div>
            </div>

            {/* Preview */}
            {preview && (
              <div className="bg-white rounded-2xl border border-sky-200 overflow-hidden">
                <div className="bg-sky-50 px-6 py-3 flex items-center justify-between">
                  <p className="text-sky-700 text-sm font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    معاينة المقال ({activeTab === "ar" ? "العربية" : "الإنجليزية"})
                  </p>
                  <button
                    onClick={() => setPreview(false)}
                    className="text-sky-500 hover:text-sky-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div
                  className={`p-6 prose prose-sky max-w-none ${
                    activeTab === "ar" ? "prose-rtl" : ""
                  }`}
                  dir={activeTab === "ar" ? "rtl" : "ltr"}
                >
                  {form.imageURL && (
                    <img
                      src={form.imageURL}
                      alt=""
                      className="w-full rounded-xl mb-6 object-cover max-h-64"
                    />
                  )}
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    {activeTab === "ar" ? form.titleAr : form.titleEn}
                  </h1>
                  <p className="text-gray-500 text-sm whitespace-pre-wrap leading-relaxed">
                    {activeTab === "ar" ? form.contentAr : form.contentEn}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Publish Status */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm">حالة النشر</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={form.published}
                  onChange={handleChange}
                  className="w-4 h-4 text-sky-700 rounded"
                />
                <span className="text-sm text-gray-700">
                  {form.published ? "منشور للعامة" : "مسودة (غير منشور)"}
                </span>
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSave()}
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 bg-sky-950 hover:bg-sky-800 disabled:opacity-60 text-white py-2.5 rounded-xl text-sm transition-colors"
                >
                  {saving ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Save className="w-3.5 h-3.5" />
                  )}
                  حفظ
                </button>
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-sky-700" />
                صورة المقال
              </h3>

              {form.imageURL ? (
                <div className="relative group">
                  <img
                    src={form.imageURL}
                    alt="صورة المقال"
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                  <button
                    onClick={() => setForm((prev) => ({ ...prev, imageURL: "" }))}
                    className="absolute top-2 left-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-sky-300 hover:bg-sky-50 transition-colors"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-8 h-8 text-sky-500 animate-spin mb-2" />
                      <p className="text-xs text-gray-500">جاري الرفع...</p>
                    </>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-300 mb-2" />
                      <p className="text-xs text-gray-500 text-center">
                        اضغط لرفع صورة
                        <br />
                        <span className="text-gray-400">JPG, PNG — حتى 5MB</span>
                      </p>
                    </>
                  )}
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              <div className="space-y-1.5">
                <label className="text-xs text-gray-500">أو أدخل رابط الصورة</label>
                <input
                  type="url"
                  name="imageURL"
                  value={form.imageURL}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-400"
                  dir="ltr"
                />
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-700" />
                SEO — تحسين محركات البحث
              </h3>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-600">
                    وصف Google (عربي)
                  </label>
                  <textarea
                    name="metaDescriptionAr"
                    value={form.metaDescriptionAr}
                    onChange={handleChange}
                    rows={3}
                    maxLength={160}
                    placeholder="وصف قصير يظهر في نتائج Google..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                    dir="rtl"
                  />
                  <div
                    className={`text-xs ${
                      form.metaDescriptionAr.length > 155
                        ? "text-orange-500"
                        : "text-gray-400"
                    }`}
                  >
                    {form.metaDescriptionAr.length}/160
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-600">
                    Google Description (English)
                  </label>
                  <textarea
                    name="metaDescriptionEn"
                    value={form.metaDescriptionEn}
                    onChange={handleChange}
                    rows={3}
                    maxLength={160}
                    placeholder="Short description for Google..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                    dir="ltr"
                  />
                  <div
                    className={`text-xs ${
                      form.metaDescriptionEn.length > 155
                        ? "text-orange-500"
                        : "text-gray-400"
                    }`}
                  >
                    {form.metaDescriptionEn.length}/160
                  </div>
                </div>
              </div>

              {/* Google Preview */}
              {(form.titleAr || form.metaDescriptionAr) && (
                <div className="border border-gray-100 rounded-xl p-3 bg-gray-50">
                  <p className="text-xs text-gray-400 mb-2">معاينة نتيجة Google</p>
                  <p className="text-blue-700 text-sm font-medium leading-tight line-clamp-1">
                    {form.titleAr || "عنوان المقال"}
                  </p>
                  <p className="text-green-700 text-xs mt-0.5">
                    takedgroup.com/ar/blog/{form.slugAr || "..."}
                  </p>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {form.metaDescriptionAr || form.excerptAr || "وصف المقال يظهر هنا..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
