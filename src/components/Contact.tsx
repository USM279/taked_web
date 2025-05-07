import React, { useEffect, FormEvent, useState, useRef } from "react";
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
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

declare global {
  interface ImportMetaEnv {
    VITE_EMAILJS_SERVICE_ID: string;
    VITE_EMAILJS_TEMPLATE_ID: string;
    VITE_EMAILJS_PUBLIC_KEY: string;
  }
}

export const Contact = () => {
  const { t, i18n } = useTranslation();
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
  const [phoneError, setPhoneError] = useState<string>("");

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactSection.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const validatePhone = (phone: string) => {
    const cleaned = phone.trim();
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(cleaned);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError(
        i18n.language === "ar"
          ? "يرجى إدخال رقم هاتف صحيح"
          : "Please enter a valid phone number"
      );
      return;
    } else {
      setPhoneError("");
    }

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div
        className="container mx-auto px-4"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{t("contact.phone")}</h3>
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
                <h3 className="font-bold mb-2">{t("contact.email")}</h3>
                <p className="text-gray-600">info@takedgroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{t("contact.address")}</h3>
                <p className="text-gray-600">
                  Ground Floor, Al Mamzar Centre - Deira - Dubai - United Arab
                  Emirates
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
                <h3 className="font-bold mb-2">{t("contact.facebook")}</h3>
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
                <h3 className="font-bold mb-2">{t("contact.instagram")}</h3>
                <p className="text-gray-600">taked.ae</p>
              </div>
            </a>

            <a
              href="https://wa.me/971564331993?text=اهلا%20بكم%20مع%20تأكيد%20،%20كيف%20يمكننا%20خدمتكم%20؟"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <MessageCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{t("contact.whatsapp")}</h3>
                <p dir="ltr" className="text-gray-600 ">
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
            className="glass-card p-6 rounded-lg shadow-md md:min-h-[520px] order-1 md:order-2"
          >
            <div className="flex flex-col">
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="reply_to"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    onBlur={() => {
                      if (!validatePhone(formData.phone)) {
                        setPhoneError(
                          i18n.language === "ar"
                            ? "يرجى إدخال رقم هاتف صحيح"
                            : "Please enter a valid phone number"
                        );
                      } else {
                        setPhoneError("");
                      }
                    }}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-left"
                    placeholder="+971 XX XXX XXXX"
                  />
                  {phoneError && (
                    <p className="text-red-600 text-sm mt-1">{phoneError}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="w-full mt-4 space-y-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-950 hover:bg-sky-800 disabled:opacity-50"
                >
                  {isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </Button>

                <div className="h-6">
                  {(submitStatus === "success" || submitStatus === "error") && (
                    <p
                      className={`text-center text-sm mt-1 ${
                        submitStatus === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitStatus === "success"
                        ? t("contact.form.success")
                        : t("contact.form.error")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>

          <div className="min-h-[520px] md:min-h-[520px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.9301477062651!2d55.353026269605365!3d25.279982998603597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8f22a23063%3A0xb72d5c1925f47068!2zVGFrZWQg4oCTINiq2KPZg9mK2K8g2YTYrtiv2YXYp9iqINix2KzYp9mEINin2YTYo9i52YXYp9mE!5e0!3m2!1sen!2str!4v1745166709513!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={t("contact.address")}
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            ✨ Powered by{" "}
            <a
              href="https://obada.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
            >
              Obada's
            </a>{" "}
            magic ✨
          </p>
        </div>
      </div>
    </section>
  );
};
