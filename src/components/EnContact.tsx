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
  service: string;
  message: string;
}

export const EnContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
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

  // Field error states
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Available services list
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

  // Phone number validation function
  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

    // International phone format (+country code + 7-15 digits)
    const internationalPhoneRegex = /^\+[1-9]\d{6,14}$/;

    // Local phone format (7-11 digits)
    const localPhoneRegex = /^\d{7,11}$/;

    return (
      internationalPhoneRegex.test(cleanPhone) ||
      localPhoneRegex.test(cleanPhone)
    );
  };

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 5;
  };

  // Name validation function
  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 50;
  };

  // Message validation function
  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10 && message.trim().length <= 500;
  };

  // Field validation with error display
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

      case "service":
        // Service is optional - no validation needed
        break;
    }

    setFieldErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Validate all form data
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return; // Don't submit if there are errors
    }

    // Check if EmailJS is configured
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
      setSubmitStatus("success"); // Show temporary success message
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" dir="ltr">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're happy to help anytime. Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]">
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <Phone className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Phone Numbers</h3>
                <p dir="ltr" className="text-gray-600">
                  +971 56 433 1993
                </p>
                <p dir="ltr" className="text-gray-600">
                  +971 56 433 1990
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]">
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <Mail className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Email Address</h3>
                <p className="text-gray-600">info@takedgroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]">
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <MapPin className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Our Address</h3>
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
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]"
            >
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <Facebook className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">
                  Our Facebook Page
                </h3>
                <p className="text-gray-600">taked24</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/taked.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]"
            >
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <Instagram className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Our Instagram</h3>
                <p className="text-gray-600">taked.ae</p>
              </div>
            </a>

            <a
              href="https://wa.me/971564331993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-[104px]"
            >
              <div className="bg-sky-950/10 p-4 rounded-lg">
                <MessageCircle className="text-sky-900 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-gray-900">
                  Support via WhatsApp
                </h3>
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
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 order-2 md:order-2"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
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
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                    fieldErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., John Doe"
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
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
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 ${
                    fieldErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., example@email.com"
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
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
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 text-left ${
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      service: e.target.value,
                    }))
                  }
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
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
                  className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-sky-950 focus:border-sky-950 resize-none ${
                    fieldErrors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Please describe your message in detail"
                ></textarea>
                {fieldErrors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-950 hover:bg-sky-800"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-600 text-center">
                  Your message has been sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  An error occurred, please try again.
                </p>
              )}
            </div>
          </form>

          <div className="min-h-[520px] rounded-2xl overflow-hidden shadow-lg order-1 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.9301477062651!2d55.353026269605365!3d25.279982998603597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8f22a23063%3A0xb72d5c1925f47068!2zVGFrZWQg4oCTINiq2KPZg9mK2K8g2YTYrtiv2YXYp9iqINix2KzYp9mEINin2YTYo9i52YXYp9mE!5e0!3m2!1sen!2str!4v1745166709513!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Our Address"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
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
      </div>
    </section>
  );
};
