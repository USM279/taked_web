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

export const EnContact = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4" dir="ltr">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're happy to help anytime. Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone Numbers</h3>
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
                <h3 className="font-bold mb-2">Email Address</h3>
                <p className="text-gray-600">info@takedgroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Our Address</h3>
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
                <h3 className="font-bold mb-2">Our Facebook Page</h3>
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
                <h3 className="font-bold mb-2">Our Instagram</h3>
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
                <h3 className="font-bold mb-2">Support via WhatsApp</h3>
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
            className="glass-card p-6 rounded-lg shadow-md order-2 md:order-2"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="reply_to"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-left"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
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
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                ></textarea>
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
      </div>
    </section>
  );
};
