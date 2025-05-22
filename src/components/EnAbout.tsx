import { Building, Users, Shield } from "lucide-react";

export const EnAbout = () => {
  return (
    <section id="about" className="bg-white py-20" dir="ltr">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a specialized company offering integrated business solutions
            in the UAE. We help entrepreneurs and investors achieve their goals
            with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">+15 Years of Experience</h3>
            <p className="text-gray-600">
              We have deep experience in the UAE market and a full understanding
              of legal requirements.
            </p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Professional Team</h3>
            <p className="text-gray-600">
              Our specialized team provides customized solutions tailored to
              each client's needs.
            </p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Full Reliability</h3>
            <p className="text-gray-600">
              We adhere to the highest standards of quality and transparency in
              all our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
