import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Shield,
  Award,
  Users,
} from "lucide-react";

export const ArFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 hidden md:block" dir="rtl">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  تأكيد
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  شريكك الموثوق في جميع الخدمات الحكومية والتجارية في دولة
                  الإمارات العربية المتحدة. نحن هنا لنجعل رحلتك أسهل وأسرع.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">مرخص رسمياً</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {[
                  { name: "الصفحة الرئيسية", href: "/ar" },
                  { name: "خدماتنا", href: "/ar/services" },
                  { name: "من نحن", href: "/ar/about-us" },
                  { name: "اتصل بنا", href: "/ar/contact-us" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-lg hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">
                خدماتنا الرئيسية
              </h4>
              <ul className="space-y-3">
                {[
                  "تأسيس الشركات",
                  "التأشيرات والإقامة",
                  "عقود الإيجار",
                  "الهوية الإماراتية",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-lg hover:text-sky-400 transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">
                معلومات التواصل
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg" dir="ltr">
                      +971 56 433 1993
                    </p>
                    <p className="text-gray-400 text-sm">متاح 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">info@takedgroup.com</p>
                    <p className="text-gray-400 text-sm">للاستفسارات العامة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">
                      دبي، الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">الأحد - الخميس</p>
                    <p className="text-gray-400 text-sm">9:00 ص - 6:00 م</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50">
          <div className="container mx-auto px-4 py-6" dir="rtl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-300 text-center md:text-right">
                <p className="text-lg">
                  © {new Date().getFullYear()} تأكيد جميع الحقوق محفوظة
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  مرخص من الدائرة الإقتصادية - دبي
                </p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm ml-4">تابعنا على:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/taked24/", color: "text-blue-400" },
                    { icon: Instagram, href: "https://www.instagram.com/taked.ae/", color: "text-pink-400" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/company/taked/",
                      color: "text-blue-600",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-110 transition-transform duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Developer Credit */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>
                  ✨ Powered by{" "}
                  <a
                    href="https://obada.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-medium transition-colors duration-200 hover:underline"
                  >
                    Obada's
                  </a>{" "}
                  Magic ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
