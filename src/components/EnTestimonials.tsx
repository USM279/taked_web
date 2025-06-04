import { Star } from "lucide-react";

export const EnTestimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Mohamed",
      role: "Business Owner",
      content:
        "Excellent and fast service. They helped me set up my company professionally",
      rating: 5,
    },
    {
      name: "Sarah Ali",
      role: "Investor",
      content: "Professional and helpful team. I highly recommend them",
      rating: 5,
    },
    {
      name: "Khalid Abdullah",
      role: "Entrepreneur",
      content: "They made everything easy and I got my license in record time",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50" dir="ltr">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading text-gray-900 mb-6 font-bold">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take pride in our clients' trust and always strive to deliver the
            best services
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
