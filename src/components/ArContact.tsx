import React, { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ArContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // state for field errors for validation
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // validate phone number
  const validatePhoneNumber = (phone: string): boolean => {
    // remove spaces and symbols
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

    // validate international phone number (must start with + and contain 7-15 digits)
    const internationalPhoneRegex = /^\+[1-9]\d{6,14}$/;

    // validate local phone number (must contain 7-11 digits)
    const localPhoneRegex = /^\d{7,11}$/;

    return (
      internationalPhoneRegex.test(cleanPhone) ||
      localPhoneRegex.test(cleanPhone)
    );
  };

  // validate email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 5;
  };

  // validate name
  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 50;
  };

  // validate message
  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10 && message.trim().length <= 500;
  };

  // validate all fields with error messages
  const validateField = (fieldName: string, value: string) => {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          error = "يرجى تعبئة الاسم";
        } else if (!validateName(value)) {
          error = "الاسم يجب أن يكون من 2-50 حرف";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "يرجى تعبئة البريد الإلكتروني";
        } else if (!validateEmail(value)) {
          error = "يرجى إدخال بريد إلكتروني صحيح";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "يرجى تعبئة رقم الهاتف";
        } else if (!validatePhoneNumber(value)) {
          error = "يرجى إدخال رقم هاتف صحيح";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "يرجى كتابة رسالتك";
        } else if (!validateMessage(value)) {
          error = "الرسالة يجب أن تكون من 10-500 حرف";
        }
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // validate all data
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return; // don't submit the form if there are errors
    }

    // check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "service_xxxxxxx" ||
      templateId === "template_xxxxxxx" ||
      publicKey === "xxxxxxxxxxxxxxx"
    ) {
      console.warn(
        "EmailJS not configured properly. Form submission disabled."
      );
        setSubmitStatus("success"); // show success message temporarily
      setFormData({ name: "", email: "", phone: "", message: "" });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4" dir="rtl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يسعدنا الرد على استفساراتك ومساعدتك في أي وقت. املأ النموذج أدناه
            وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">أرقام الهاتف</h3>
                <p dir="ltr" className="text-gray-600">
                  +971 56 433 1993
                </p>
                <p dir="ltr" className="text-gray-600">
                  +971 56 433 1990
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@takedgroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">العنوان</h3>
                <p className="text-gray-600">
                  الطابق الأرضي، مركز الممزر - ديرة - دبي - الإمارات العربية
                  المتحدة
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://www.facebook.com/taked24/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <Facebook className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">صفحتنا على فيسبوك</h3>
                <p className="text-gray-600">taked24</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/taked.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <Instagram className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">حسابنا على إنستغرام</h3>
                <p className="text-gray-600">taked.ae</p>
              </div>
            </a>

            <a
              href="https://wa.me/971564331993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <MessageCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">الدعم عبر واتساب</h3>
                <p dir="ltr" className="text-gray-600">
                  +971 56 433 1993
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="glass-card p-6 rounded-lg shadow-md order-1 md:order-2"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  onBlur={(e) => validateField("name", e.target.value)}
                  required
                  minLength={2}
                  maxLength={50}
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    fieldErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="مثال: عبادة فادي "
                />
                {fieldErrors.name ? (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.name}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">الاسم مطلوب</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="reply_to"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  onBlur={(e) => validateField("email", e.target.value)}
                  required
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                    fieldErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="مثال: example@email.com"
                />
                {fieldErrors.email ? (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.email}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">
                    البريد الإلكتروني مطلوب
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  رقم الهاتف <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  onBlur={(e) => validateField("phone", e.target.value)}
                  required
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-left ${
                    fieldErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+971 50 123 4567 "
                />
                {fieldErrors.phone ? (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.phone}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">رقم هاتف مطلوب</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  رسالتك <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  onBlur={(e) => validateField("message", e.target.value)}
                  required
                  minLength={10}
                  maxLength={500}
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none ${
                    fieldErrors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="يرجى وصف رسالتك بالتفصيل"
                ></textarea>
                {fieldErrors.message ? (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.message}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">
                    رسالة مفصلة مطلوبة
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-950 hover:bg-sky-800"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-600 text-center">
                  تم إرسال الرسالة بنجاح!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  حدث خطأ، يرجى المحاولة مرة أخرى.
                </p>
              )}
            </div>
          </form>

          <div className="min-h-[520px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.9301477062651!2d55.353026269605365!3d25.279982998603597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8f22a23063%3A0xb72d5c1925f47068!2zVGFrZWQg4oCTINiq2KPZg9mK2K8g2YTYrtiv2YXYp9iqINix2KzYp9mEINin2YTYo9i52YXYp9mE!5e0!3m2!1sen!2str!4v1745166709513!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="العنوان"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
