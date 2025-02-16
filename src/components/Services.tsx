import { Briefcase, Users, FileText, Plane, Building, Scale, UserCheck, DollarSign, FileSignature, ShieldCheck, HeartPulse, ScrollText } from "lucide-react";

export const Services = () => {
  const services = [{
    icon: Briefcase,
    title: "خدمات دائرة التنمية الاقتصادية",
    description: "تأسيس الشركات وإتمام معاملات الرخص التجارية"
  }, {
    icon: Plane,
    title: "خدمات التأشيرات",
    description: "إصدار وتجديد جميع أنواع التأشيرات السياحية والعمل والعائلية"
  }, {
    icon: Building,
    title: "خدمات عقود الإيجار",
    description: "توثيق وتجديد عقود الإيجار وفق الأنظمة المعتمدة"
  }, {
    icon: UserCheck,
    title: "خدمات الهوية الإماراتية",
    description: "إصدار وتجديد الهوية الإماراتية بسهولة وسرعة"
  }, {
    icon: FileText,
    title: "خدمات الإقامات",
    description: "إجراءات إصدار وتجديد الإقامة بمختلف أنواعها"
  }, {
    icon: Scale,
    title: "الخدمات القانونية والتراخيص",
    description: "إجراءات التراخيص التجارية والعقود الرسمية"
  }, {
    icon: Users,
    title: "خدمات وزارة الموارد البشرية",
    description: "إنجاز معاملات وزارة الموارد البشرية والتوطين"
  }, {
    icon: ShieldCheck,
    title: "خدمات الإدارة العامة للإقامة",
    description: "معاملات الهجرة والإقامة بسرعة ودقة"
  }, {
    icon: HeartPulse,
    title: "تأمين الأفراد والموظفين",
    description: "توفير تأمين صحي معتمد للأفراد والعاملين"
  }, {
    icon: DollarSign,
    title: "تأمين الشركات والمشروعات",
    description: "حماية للمشاريع والبنايات والمواقع الإنشائية"
  }, {
    icon: FileSignature,
    title: "تصديق الوثائق والترجمة",
    description: "تصديق المستندات وترجمتها ترجمة قانونية معتمدة"
  }, {
    icon: ScrollText,
    title: "خدمات كاتب العدل",
    description: "توثيق المعاملات والعقود رسمياً"
  }];

  return <section id="services" className="py-20" style={{
    backgroundImage: 'linear-gradient(to bottom, white, rgb(240 249 255))'
  }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">خـــــدمـــــاتـــــنـــــا</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          نقدم باقة متكاملة من الخدمات لتلبية جميع احتياجات أعمالك في الإمارات
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <div key={index} className="glass-card p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <service.icon className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  </section>;
};
