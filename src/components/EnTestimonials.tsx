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
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-accent"
      dir="ltr"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading text-gray-900 mb-4 font-bold">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in our clients' trust and always strive to deliver the
            best services
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
