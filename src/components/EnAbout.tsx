import { Building, Users, Shield } from "lucide-react";

export const EnAbout = () => {
  return (
    <section id="about" className="bg-gray-50 py-20" dir="ltr">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a company specialized in providing comprehensive business
            solutions in the UAE. We help entrepreneurs and investors achieve
            their goals with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-sky-950 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              +15 Years of Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We have deep experience in the UAE market and comprehensive
              understanding of legal requirements
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-sky-950 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Professional Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized team providing customized solutions that meet each
              client's needs
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-sky-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-sky-950 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Complete Reliability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We adhere to the highest standards of quality and transparency in
              all our services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
