import { useEffect } from "react";
import { EnNavbar } from "../components/EnNavbar";
import { EnFooter } from "../components/EnFooter";
import {
  Briefcase,
  Users,
  FileText,
  Plane,
  Building,
  Scale,
  UserCheck,
  DollarSign,
  FileSignature,
  ShieldCheck,
  HeartPulse,
  ScrollText,
  Clock,
  CheckCircle,
  Star,
  PhoneCall,
  Award,
  Target,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  TypingAnimation,
  DEFAULT_TYPING_SPEED,
} from "../components/TypingAnimation.tsx";

export const EnServicesPage = () => {
  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.title = "Services - Taked";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Department of Economic Development Services",
      description:
        "Company formation and commercial license processing with ease and efficiency",
      details: [
        "Limited Liability Company (LLC) formation",
        "Commercial, industrial and professional license issuance",
        "Renewal and modification of existing trade licenses",
        "Addition and deletion of business activities as needed",
        "Free zone services (JAFZA, Jebel Ali, etc.)",
        "Company legal structure changes",
        "Company and license ownership transfers",
        "Real estate and investment company services",
      ],
      processTime: "3-7 working days",
      price: "Starting from AED 2,500",
      warranty: "Lifetime guarantee on all services",
    },
    {
      icon: Plane,
      title: "Comprehensive Visa Services",
      description:
        "Issuance and renewal of all types of visas through the fastest approved methods",
      details: [
        "Work visas for citizens and residents",
        "Tourist and family visit visas (short and long term)",
        "Investment and business visas",
        "Renewal of all types of visas",
        "Exit and re-entry visas (multiple trips)",
        "Visas for dependents and domestic workers",
        "Student and training visas",
        "Golden visa services",
      ],
      processTime: "1-5 working days",
      price: "Starting from AED 500",
      warranty: "Visa guarantee or full refund",
    },
    {
      icon: Building,
      title: "Comprehensive Tenancy Contract Services",
      description:
        "Authentication and renewal of tenancy contracts according to the latest approved regulations",
      details: [
        "Authentication of residential and commercial tenancy contracts",
        "Renewal of expired tenancy contracts",
        "Amendment of tenancy contract terms",
        "Official cancellation of tenancy contracts",
        "Issuance of tenancy certificates for institutions",
        "Amicable resolution of tenancy disputes",
        "Free zone tenancy contracts",
        "Legal consultations for tenancy contracts",
      ],
      processTime: "1-3 working days",
      price: "Starting from AED 300",
      warranty: "Free follow-up for 6 months",
    },
    {
      icon: UserCheck,
      title: "Advanced Emirates ID Services",
      description:
        "Issuance and renewal of Emirates ID using the latest technologies",
      details: [
        "Emirates ID issuance for new residents",
        "Renewal of expired Emirates ID",
        "Replacement of damaged or lost Emirates ID",
        "Personal data and address updates",
        "Express Emirates ID services",
        "Services for elderly and people with special needs",
        "Emirates ID linking with digital services",
        "Lost Emirates ID replacement",
      ],
      processTime: "2-7 working days",
      price: "Starting from AED 200",
      warranty: "Data accuracy guarantee",
    },
    {
      icon: FileText,
      title: "Comprehensive Residence Services",
      description:
        "Procedures for issuing and renewing all types and categories of residence permits",
      details: [
        "Work and investment residence permits",
        "Renewal of expired residence permits",
        "Dependent and family residence permits",
        "Sponsor transfer (Kafala transfer)",
        "Official residence permit cancellation",
        "Golden residence services for investors",
        "Retired person residence permits",
        "Student and researcher residence permits",
      ],
      processTime: "3-10 working days",
      price: "Starting from AED 1,000",
      warranty: "Free follow-up until completion",
    },
    {
      icon: Scale,
      title: "Legal Services and Professional Licensing",
      description: "Specialized licensing procedures and legal contracts",
      details: [
        "Commercial and legal contract drafting",
        "Specialized professional licensing",
        "Trademark and intellectual property registration",
        "Corporate legal consultations",
        "Restaurant, cafe and hotel licensing",
        "Medical and educational licensing",
        "Sports and entertainment activity licensing",
        "Environmental and industrial licensing",
      ],
      processTime: "5-15 working days",
      price: "Starting from AED 1,500",
      warranty: "Legal guarantee on all contracts",
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
                text="Our Services"
                highlightedWord="Our Services"
                direction="ltr"
                speed={DEFAULT_TYPING_SPEED}
              />
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              At <span className="font-bold text-primary">Taked</span>, we pride
              ourselves on offering the most comprehensive suite of government
              and commercial services in the United Arab Emirates. With over 15
              years of experience, we guarantee our clients the completion of
              all their transactions with the highest levels of quality and
              efficiency.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+15</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+10K</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+50K</div>
                <div className="text-gray-600">Completed Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white" dir="ltr">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Taked?
            </h2>
            <p className="text-xl text-gray-600">
              The advantages that make us the first choice for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
              <Clock className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Speed of Completion
              </h3>
              <p className="text-gray-600">
                We guarantee the fastest possible completion times for all
                transactions without delay
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Results Guarantee
              </h3>
              <p className="text-gray-600">
                We guarantee 100% success for all transactions or full refund
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl">
              <Star className="text-yellow-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Extensive Experience
              </h3>
              <p className="text-gray-600">
                Over 15 years of deep experience in the UAE market and its laws
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
              <PhoneCall className="text-purple-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Continuous Support
              </h3>
              <p className="text-gray-600">
                Specialized support team available 24/7 to serve you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        dir="ltr"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Detailed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to meet all
              your business and personal needs
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="p-10">
                  <div className="flex items-start gap-8 mb-8">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-2xl">
                      <service.icon className="text-primary w-12 h-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* What we offer */}
                    <div className="lg:col-span-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Target className="text-primary w-6 h-6" />
                        What We Offer:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl text-center">
                        <Clock className="text-primary w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">
                          Completion Time
                        </h5>
                        <p className="text-lg font-semibold text-primary">
                          {service.processTime}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
                        <DollarSign className="text-green-600 w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">
                          Pricing
                        </h5>
                        <p className="text-lg font-semibold text-green-600">
                          {service.price}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl text-center">
                        <Award className="text-yellow-600 w-8 h-8 mx-auto mb-3" />
                        <h5 className="font-bold text-gray-900 mb-2">
                          Warranty
                        </h5>
                        <p className="text-sm font-medium text-yellow-700">
                          {service.warranty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
