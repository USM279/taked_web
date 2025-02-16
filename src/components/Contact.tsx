import React, { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_ksxzmdp', // Service ID
        'template_sdrkczt', // Template ID
        {
          to_name: 'Taked Team',
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'ljV2MAr3l3mVsuEue' // Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">تـــواصــــل مــــعــــنــــا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">اتصل بنا</h3>
                  <p className="text-gray-600 direction-ltr" style={{ direction: 'ltr' }}>+971 56 433 1993</p>
                  <p className="text-gray-600 direction-ltr" style={{ direction: 'ltr' }}>+971 56 433 1990</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-600">info@taked.ae</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">العنوان</h3>
                  <p className="text-gray-600">دبي، الإمارات العربية المتحدة</p>
                </div>
              </div>
            </div>

            <div className="h-60 w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.2126907243588!2d55.35295866975066!3d25.280019932076033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0fd57734fd%3A0xfea3c00a8bbf8117!2sMamzar%20Centre!5e0!3m2!1sen!2str!4v1739500443870!5m2!1sen!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <a 
                href="https://www.facebook.com/taked24/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary/10 p-4 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Facebook className="text-primary w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/taked.ae/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary/10 p-4 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="text-primary w-6 h-6" />
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="glass-card p-6 rounded-lg shadow-md h-[520px]"
          >
            <div className="flex flex-col h-full">
              <div className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-left" 
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    الرسالة
                  </label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-sky-950 hover:bg-sky-800 disabled:opacity-50"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
                
                <div className="h-6 mt-2">
                  {(submitStatus === 'success' || submitStatus === 'error') && (
                    <p className={`text-center text-sm mt-1 ${
                      submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {submitStatus === 'success' 
                        ? 'تم إرسال رسالتك بنجاح!' 
                        : 'حدث خطأ. يرجى المحاولة مرة أخرى.'
                      }
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>;
};
