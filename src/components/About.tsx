import { Building, Users, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      id="about"
      className="bg-white py-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            {t("about.sectionTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.sectionDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t("about.box1.title")}</h3>
            <p className="text-gray-600">{t("about.box1.description")}</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t("about.box2.title")}</h3>
            <p className="text-gray-600">{t("about.box2.description")}</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t("about.box3.title")}</h3>
            <p className="text-gray-600">{t("about.box3.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
