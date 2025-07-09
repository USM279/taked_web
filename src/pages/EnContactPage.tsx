import { useEffect, useState } from "react";
import { EnNavbar } from "../components/EnNavbar";
import { EnFooter } from "../components/EnFooter";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Users,
  CheckCircle,
  AlertCircle,
  Star,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/motions/TypingAnimation.tsx";

export const EnContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Field validation errors
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation functions
  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const internationalPhoneRegex = /^\+[1-9]\d{6,14}$/;
    const localPhoneRegex = /^\d{7,11}$/;
    return (
      internationalPhoneRegex.test(cleanPhone) ||
      localPhoneRegex.test(cleanPhone)
    );
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 5;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 50;
  };

  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10 && message.trim().length <= 500;
  };

  const validateField = (fieldName: string, value: string) => {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          error = "Please enter your name";
        } else if (!validateName(value)) {
          error = "Name must be 2-50 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Please enter your email";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Please enter your phone number";
        } else if (!validatePhoneNumber(value)) {
          error = "Please enter a valid phone number";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Please write your message";
        } else if (!validateMessage(value)) {
          error = "Message must be 10-500 characters";
        }
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.title = "Contact Us - Taked";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return; // Don't submit if there are validation errors
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setFieldErrors({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+971 56 433 1993",
      description: "Available 24/7 to answer your inquiries",
      action: "tel:+971564331993",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+971 56 433 1993",
      description: "Quick and direct communication via WhatsApp",
      action: "https://wa.me/971564331993",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@takedgroup.com",
      description: "Send us a message and we'll reply within an hour",
      action: "mailto:info@takedgroup.com",
      color: "from-blue-50 to-sky-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Dubai, UAE",
      description: "Our offices in strategic location in the heart of Dubai",
      action: "#",
      color: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
    },
  ];

  const workingHours = [
    { day: "Saturday - Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "Closed" },
  ];

  const services = [
    "Department of Economic Development Services",
    "Visa Services",
    "Tenancy Contract Services",
    "Emirates ID Services",
    "Residence Services",
    "Legal Services and Licensing",
    "Ministry of Human Resources Services",
    "General Directorate of Residency Services",
    "Insurance Services",
    "Document Authentication & Translation",
    "Notary Services",
    "Other",
  ];

  const faqItems = [
    {
      question: "How long does it take to complete transactions?",
      answer:
        "Processing time varies by service type, but most of our services are completed within 1-7 business days.",
    },
    {
      question: "Do you offer a guarantee on your services?",
      answer:
        "Yes, we offer a 100% guarantee on all our services. If we don't succeed, we provide a full refund.",
    },
    {
      question: "Can I track the status of my transaction?",
      answer:
        "Absolutely! We provide direct tracking service and send you regular updates on your transaction status.",
    },
    {
      question: "Do you provide free consultations?",
      answer:
        "Yes, we offer free initial consultation to all our clients to help them choose the right service.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EnNavbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-blue-50"
        dir="ltr"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
              <TypingAnimation
                text="Contact Us"
                highlightedWord="Contact Us"
                direction="ltr"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              We're here to help you every step of your business journey.
              Contact us today and let our experts guide you toward success.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-900 mb-2">
                  &lt; 1hr
                </div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-900 mb-2">24/7</div>
                <div className="text-gray-600">Continuous Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-900 mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way for you to contact us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`block p-8 bg-gradient-to-br ${method.color} rounded-2xl hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <method.icon className={`${method.iconColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {method.info}
                  </p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="ltr"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within an hour
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField("name", e.target.value)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                        fieldErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={(e) => validateField("phone", e.target.value)}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 text-left ${
                        fieldErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+971 50 123 4567"
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={(e) => validateField("email", e.target.value)}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                      fieldErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Required Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950"
                  >
                    <option value="">Select Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={(e) => validateField("message", e.target.value)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 resize-none ${
                      fieldErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-950 text-white px-8 py-4 rounded-lg hover:bg-sky-800 transition flex items-center justify-center gap-3 text-lg font-medium disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                    <span className="text-green-800">
                      Your message has been sent successfully! We'll contact you
                      soon.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-sky-900 w-6 h-6" />
                  Working Hours
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.day}
                      </span>
                      <span className="text-sky-900 font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-sky-900 w-6 h-6" />
                  Our Location
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Address:</strong> Ground Floor, Al Mamzar Centre -
                    Deira - Dubai - United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Headphones className="text-red-600 w-6 h-6" />
                  Emergency Line
                </h3>
                <p className="text-gray-700 mb-4">
                  For urgent and emergency cases, contact us 24/7
                </p>
                <a
                  href="tel:+971564331993"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
                >
                  <Phone className="w-5 h-5" />
                  +971 56 433 1993
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to the most common questions from our clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <AlertCircle className="text-sky-900 w-6 h-6 mt-1 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          {/* Additional Contact Info */}
          <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who chose Taked for their
              government services in the UAE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <a
                href="tel:+971564331993"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-sky-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition text-lg font-bold"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a
                href="https://wa.me/971564331993?text=Hello%2C%20how%20can%20we%20help%20you%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-2 border-green-400 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg font-bold"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnFooter />
    </div>
  );
};
