import { useEffect, useState } from "react";
import { EnNavbar } from "../components/EnNavbar";
import { EnFooter } from "../components/EnFooter";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Building,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Star,
  Clock,
  Shield,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Eye,
  Zap,
  Globe,
  UserCheck,
  MessageCircle,
} from "lucide-react";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/motions/TypingAnimation.tsx";

export const EnAboutPage = () => {
  const [activeYear, setActiveYear] = useState(2025);

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.title = "About Us - Taked";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const timeline = [
    {
      year: 2011,
      title: "Company Establishment",
      description:
        "Founded Taked with the vision of simplifying government transactions in the UAE",
    },
    {
      year: 2012,
      title: "Service Expansion",
      description:
        "Expanded our services to include visa services and commercial licensing",
    },
    {
      year: 2016,
      title: "Digital Transformation",
      description:
        "Implemented the latest digital technologies to enhance customer experience",
    },
    {
      year: 2020,
      title: "Market Leadership",
      description:
        "Became one of the leading companies in government services in the UAE",
    },
    {
      year: 2025,
      title: "Sustainable Growth",
      description:
        "Continuing our journey towards innovation and excellence in customer service",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every transaction we handle, ensuring the highest quality standards",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "We build long-term relationships with our clients based on trust and transparency",
    },
    {
      icon: Zap,
      title: "Speed",
      description:
        "We guarantee completion in the shortest possible time without compromising quality",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description:
        "We conduct our business with complete honesty and transparency",
    },
    {
      icon: HeartHandshake,
      title: "Customer Care",
      description:
        "Customer satisfaction is our top priority and the measure of our success",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly adopt the latest technologies to improve our services",
    },
  ];

  // const team = [
  //   {
  //     name: "Ahmed Al-Mansouri",
  //     position: "Chief Executive Officer",
  //     experience: "15+ years",
  //     specialty: "Strategic Leadership and Business Development",
  //   },
  //   {
  //     name: "Sarah Al-Zahra",
  //     position: "Head of Operations",
  //     experience: "12+ years",
  //     specialty: "Government Relations and Process Management",
  //   },
  //   {
  //     name: "Mohammed Al-Rashid",
  //     position: "Legal Services Director",
  //     experience: "10+ years",
  //     specialty: "Commercial Law and Licensing",
  //   },
  //   {
  //     name: "Fatima Al-Nuaimi",
  //     position: "Customer Relations Manager",
  //     experience: "8+ years",
  //     specialty: "Customer Experience and Support",
  //   },
  // ];

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
            <h1 className="text-6xl font-heading font-bold text-gray-900 mb-6">
              <TypingAnimation
                text="About Taked"
                highlightedWord="About Taked"
                direction="ltr"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              For over 15 years, we have been your trusted partner in navigating
              the UAE's business landscape. We transform complex government
              procedures into simple, efficient solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600">Completed Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">Taked</strong> was born from
                  a simple yet powerful vision: to make government services in
                  the UAE accessible, efficient, and hassle-free for everyone.
                  What started as a small team of dedicated professionals has
                  grown into one of the most trusted names in government
                  services across the Emirates.
                </p>
                <p>
                  Over the years, we have witnessed the remarkable
                  transformation of the UAE into a global business hub. We've
                  been privileged to be part of this journey, helping thousands
                  of entrepreneurs, businesses, and individuals navigate the
                  regulatory landscape with confidence and ease.
                </p>
                <p>
                  Today, we continue to innovate and evolve, always staying
                  ahead of regulatory changes and embracing new technologies to
                  serve our clients better. Our commitment remains unchanged:
                  delivering excellence in every interaction and ensuring 100%
                  success in every transaction.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-sky-200/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why We're Different
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      Unmatched experience in UAE regulations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      Guaranteed results or full refund policy
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      24/7 customer support in multiple languages
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      Digital-first approach for faster processing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                    <span className="text-gray-700">
                      Transparent pricing with no hidden fees
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="ltr"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key milestones that shaped our company and defined
              our commitment to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12 overflow-x-auto">
              <div className="flex gap-4 min-w-max">
                {timeline.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`px-6 py-3 rounded-full transition ${
                      activeYear === item.year
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Item */}
            <div className="text-center">
              {timeline.map(
                (item) =>
                  activeYear === item.year && (
                    <div
                      key={item.year}
                      className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100"
                    >
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <Calendar className="text-primary w-8 h-8" />
                        <span className="text-4xl font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {item.title}
                      </h3>
                      <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        {item.description}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every service
              we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="ltr"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The professionals behind our success, dedicated to delivering
              exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8 text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-sky-200/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-primary w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.position}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                    <p className="leading-relaxed">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your business journey in the UAE? Our team is here
              to help you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
              <Phone className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <a
                href="tel:+971564331993"
                className="text-primary font-semibold text-lg hover:underline"
              >
                +971 56 433 1993
              </a>
              <p className="text-gray-600 mt-2">Available 24/7</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <Mail className="text-green-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <a
                href="mailto:info@takedgroup.com"
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                info@takedgroup.com
              </a>
              <p className="text-gray-600 mt-2">Response within 1 hour</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
              <MapPin className="text-purple-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-purple-600 font-semibold text-lg">
                Dubai, UAE
              </p>
              <p className="text-gray-600 mt-2">
                Strategic location in the heart of Dubai
              </p>
            </div>
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
