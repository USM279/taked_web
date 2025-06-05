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

export const EnFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16" dir="ltr">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Taked
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Your trusted partner for all government and commercial
                  services in the United Arab Emirates. We're here to make your
                  journey easier and faster.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Officially Licensed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/en" },
                  { name: "Our Services", href: "/en/services" },
                  { name: "About Us", href: "/en/about-us" },
                  { name: "Contact Us", href: "/en/contact-us" },
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
                Our Main Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Company Formation",
                  "Visas & Residence",
                  "Emirates ID",
                  "Professional Licensing",
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
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">+971 56 433 1993</p>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">info@takedgroup.com</p>
                    <p className="text-gray-400 text-sm">General inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="text-gray-400 text-sm">
                      Offices across all Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-lg">Sunday - Thursday</p>
                    <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50">
          <div className="container mx-auto px-4 py-6" dir="ltr">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-300 text-center md:text-left">
                <p className="text-lg">
                  © {new Date().getFullYear()} Taked. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Licensed by UAE Government
                </p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm mr-4">Follow us:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", color: "text-blue-400" },
                    { icon: Instagram, href: "#", color: "text-pink-400" },
                    { icon: Linkedin, href: "#", color: "text-blue-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`${social.color} hover:scale-110 transition-transform duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Developer Credit */}
              <div className="text-gray-400 text-sm text-center md:text-right">
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
