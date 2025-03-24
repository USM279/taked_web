import React, { FormEvent, useState, useRef } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
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
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_ksxzmdp',
        'template_sdrkczt',
        form.current,
        'ljV2MAr3l3mVsuEue'
      );

      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">اتصل بنا</h3>
                <p className="text-gray-600 direction-ltr" style={{ direction: 'ltr' }}>+971 56 433 1993</p>
                <p className="text-gray-600 direction-ltr" style={{ direction: 'ltr' }}>+971 56 433 1990</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-600">info@takedgroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">العنوان</h3>
                <p className="text-gray-600">المجاز سنتر، دبي، الإمارات العربية المتحدة</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href="https://www.facebook.com/taked24/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <Facebook className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">فيسبوك</h3>
                <p className="text-gray-600">@taked24</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/taked.ae/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <Instagram className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">انستغرام</h3>
                <p className="text-gray-600">taked.ae</p>
              </div>
            </a>

            <a 
              href="https://wa.me/971564331993?text=اهلا%20بكم%20مع%20تأكيد%20،%20كيف%20يمكننا%20خدمتكم%20؟"
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[104px]"
            >
              <div className="bg-primary/10 p-4 rounded-lg">
                <MessageCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold mb-2">واتساب</h3>
                <p className="text-gray-600" style={{ direction: 'ltr' }}>+971 56 433 1993</p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form 
            ref={form}
            onSubmit={handleSubmit} 
            className="glass-card p-6 rounded-lg shadow-md md:h-[520px] order-1 md:order-2"
          >
            <div className="flex flex-col h-full">
              <div className="space-y-3">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم
                  </label>
                  <input 
                    type="text" 
                    name="from_name" 
                    id="from_name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input 
                    type="email" 
                    name="reply_to" 
                    id="reply_to" 
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
                    name="phone" 
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
                    name="message" 
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

          <div className="h-[300px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
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
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-600">
          ✨ Powered by{' '}
            <a 
              href="https://obada.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
            >
              Obada's
            </a>
            {' '}magic ✨
          </p>
        </div>
      </div>
    </section>;
};
