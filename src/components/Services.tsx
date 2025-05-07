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
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    {
      icon: Briefcase,
      title: t("services.economicDept.title"),
      description: t("services.economicDept.description"),
    },
    {
      icon: Plane,
      title: t("services.visas.title"),
      description: t("services.visas.description"),
    },
    {
      icon: Building,
      title: t("services.rent.title"),
      description: t("services.rent.description"),
    },
    {
      icon: UserCheck,
      title: t("services.emiratesId.title"),
      description: t("services.emiratesId.description"),
    },
    {
      icon: FileText,
      title: t("services.residency.title"),
      description: t("services.residency.description"),
    },
    {
      icon: Scale,
      title: t("services.legal.title"),
      description: t("services.legal.description"),
    },
    {
      icon: Users,
      title: t("services.mohre.title"),
      description: t("services.mohre.description"),
    },
    {
      icon: ShieldCheck,
      title: t("services.gdrfa.title"),
      description: t("services.gdrfa.description"),
    },
    {
      icon: HeartPulse,
      title: t("services.personalInsurance.title"),
      description: t("services.personalInsurance.description"),
    },
    {
      icon: DollarSign,
      title: t("services.projectInsurance.title"),
      description: t("services.projectInsurance.description"),
    },
    {
      icon: FileSignature,
      title: t("services.translation.title"),
      description: t("services.translation.description"),
    },
    {
      icon: ScrollText,
      title: t("services.notary.title"),
      description: t("services.notary.description"),
    },
  ];

  return (
    <section
      id="services"
      className="py-20"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundImage: "linear-gradient(to bottom, white, rgb(240 249 255))",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            {t("services.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.sectionDescription")}
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
