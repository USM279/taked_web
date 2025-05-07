import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // ✅ حل مشكلة .map بكتابة نوع البيانات
  const testimonials = t("testimonials.items", { returnObjects: true }) as {
    name: string;
    role: string;
    content: string;
    rating: number;
  }[];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-accent"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading text-gray-900 mb-4 font-bold">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.sectionDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-secondary w-5 h-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
