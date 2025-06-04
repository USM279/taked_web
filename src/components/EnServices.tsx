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
      title: "Department of Economic Development Services",
      description: "Company establishment and commercial license processing",
    },
    {
      icon: Plane,
      title: "Visa Services",
      description:
        "Issuance and renewal of all types of tourist, work and family visas",
    },
    {
      icon: Building,
      title: "Tenancy Contract Services",
      description:
        "Authentication and renewal of tenancy contracts according to approved regulations",
    },
    {
      icon: UserCheck,
      title: "Emirates ID Services",
      description: "Issuance and renewal of Emirates ID easily and quickly",
    },
    {
      icon: FileText,
      title: "Residence Services",
      description:
        "Procedures for issuing and renewing residence of various types",
    },
    {
      icon: Scale,
      title: "Legal Services and Licensing",
      description: "Commercial licensing procedures and official contracts",
    },
    {
      icon: Users,
      title: "Ministry of Human Resources Services",
      description:
        "Completion of Ministry of Human Resources and Emiratisation transactions",
    },
    {
      icon: ShieldCheck,
      title: "General Directorate of Residency Services",
      description:
        "Immigration and residence transactions quickly and accurately",
    },
    {
      icon: HeartPulse,
      title: "Individual and Employee Insurance",
      description:
        "Providing approved health insurance for individuals and employees",
    },
    {
      icon: DollarSign,
      title: "Company and Project Insurance",
      description: "Protection for projects, buildings and construction sites",
    },
    {
      icon: FileSignature,
      title: "Document Authentication & Translation",
      description:
        "Authentication of documents and their certified legal translation",
    },
    {
      icon: ScrollText,
      title: "Notary Services",
      description: "Official authentication of transactions and contracts",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" dir="ltr">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive suite of services to meet all your
            business needs in the UAE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-sky-950 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-sky-950/10 p-3 rounded-lg group-hover:bg-sky-950 transition-colors duration-300">
                  <service.icon className="text-sky-950 w-6 h-6 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
