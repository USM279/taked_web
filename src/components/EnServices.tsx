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
} from "lucide-react";

export const EnServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: "DED Services",
      description: "Company formation and trade license processing",
    },
    {
      icon: Plane,
      title: "Visa Services",
      description:
        "Issue and renewal of all types of visas (tourist, work, family)",
    },
    {
      icon: Building,
      title: "Tenancy Services",
      description:
        "Certification and renewal of tenancy contracts as per official regulations",
    },
    {
      icon: UserCheck,
      title: "Emirates ID Services",
      description: "Quick and easy issuance and renewal of Emirates ID",
    },
    {
      icon: FileText,
      title: "Residency Services",
      description:
        "Procedures for issuing and renewing all types of residencies",
    },
    {
      icon: Scale,
      title: "Legal & Licensing",
      description: "Official licensing and commercial contract processing",
    },
    {
      icon: Users,
      title: "MOHRE Services",
      description:
        "Transactions with the Ministry of Human Resources & Emiratisation",
    },
    {
      icon: ShieldCheck,
      title: "GDRFA Services",
      description: "Quick and accurate immigration and residency transactions",
    },
    {
      icon: HeartPulse,
      title: "Individual & Staff Insurance",
      description: "Approved health insurance for individuals and employees",
    },
    {
      icon: DollarSign,
      title: "Business & Project Insurance",
      description: "Protection for projects, buildings, and construction sites",
    },
    {
      icon: FileSignature,
      title: "Document Attestation & Translation",
      description: "Certified legal document attestation and translation",
    },
    {
      icon: ScrollText,
      title: "Notary Services",
      description: "Official authentication of contracts and transactions",
    },
  ];

  return (
    <section
      id="services"
      className="py-20"
      dir="ltr"
      style={{
        backgroundImage: "linear-gradient(to bottom, white, rgb(240 249 255))",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive suite of services to meet all your
            business needs in the UAE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <service.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
