import { Star } from "lucide-react";

export const ArTestimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "صاحب شركة",
      content: "خدمة ممتازة وسريعة. ساعدوني في تأسيس شركتي بكل احترافية",
      rating: 5,
    },
    {
      name: "سارة علي",
      role: "مستثمرة",
      content: "فريق محترف ومتعاون. أنصح الجميع بالتعامل معهم",
      rating: 5,
    },
    {
      name: "خالد عبدالله",
      role: "رائد أعمال",
      content: "سهلوا علي كل الإجراءات وحصلت على الرخصة بوقت قياسي",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading text-gray-900 mb-6 font-bold">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل الخدمات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 w-5 h-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {testimonial.content}
              </p>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
